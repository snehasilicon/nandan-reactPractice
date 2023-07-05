import { IServerSideGetRowsParams } from "ag-grid-community";
import { FormInstance, message } from "antd";
import axios from "axios";
import { makeAutoObservable } from "mobx";
import Message from "../../config/Message";
import { ErrorProps, FormattedErrorProps } from "./RootInterface";

export default class RootStore {
	constructor() {
		makeAutoObservable(this);
		this.setAxiosBaseUrl();
		window.addEventListener('storage', this.handleInvalidToken);
	}

	public handleInvalidToken = (e:any) => {
		if (e.key === 'token') {
			if (e.oldValue && !e.newValue) {
				window.location.href = "/";
				this.resetStore();
			} else if (!e.oldValue && e.newValue) {
				window.location.reload();
			}
		}
		if (e.key === 'groupId') {
			if (e.oldValue !== e.newValue) {
				window.location.reload();
			}
		}
	}

	public setAxiosBaseUrl = (): void => {
		axios.defaults.baseURL = process.env.REACT_APP_API_URL || "";
	};

	public setAxiosInterceptor = (): void => {
		axios.interceptors.request.use((config) => {
			let header  = config.headers;
			header = {...header, "Timezone": Intl.DateTimeFormat().resolvedOptions().timeZone}
			const authToken = localStorage.getItem("token");
			header = (authToken) ? {
				...header,
				Accept: "application/json",
				Authorization: "Bearer " + authToken,
			} : {
				...header,
				Accept: "application/json",
			};
			config.headers = header;
			/** In dev, intercepts request and logs it into console for dev */
			return config;
		});


		axios.interceptors.response.use(
			(response) => {
				if (response?.data?.notify) {
					message.success(response.data.notify);
				}
				return response;
			},
			(e) => {
				if (e.response) {
					if (e.response.data?.notify) {
						message.error(e.response.data.notify);
					}
					if (e.response.status === 423) {
						this.resetStore();
					}

					return Promise.reject(e.response);
				} else {
					message.error(Message.global.networkIssue);
					return Promise.reject({
						data: [],
						message: Message.global.networkIssue,
					});
				}
			}
		);
	};

	public resetStore = (): void => {
		localStorage.removeItem("token");
		window.location.href = "/login";
	};

	public setAxiosHeaders = (access_token?: string): Promise<any> => {
		if (access_token) localStorage.setItem("token", access_token);
		const auth_token = localStorage.getItem("token");
		if (access_token && auth_token && auth_token !== "undefined") {
			return Promise.resolve(auth_token);
		} else {
			return Promise.reject();
		}
	};

	public setNotificationConfig = (): void => {
		message.config({
			maxCount: 1,
			duration: 5,
		});
	};

	public assignErrorToInput = (
		form: FormInstance,
		errors?: ErrorProps
	): void => {
		const formattedErrors: FormattedErrorProps[] = [];
		if (errors) {
			Object.keys(errors).forEach((key) => {
				formattedErrors.push({
					name: key,
					errors: errors[key],
				});
			});
			formattedErrors.forEach((x) => {
				if (typeof x.name === "string" && x.name.indexOf(".") !== -1) {
					const name: any = x.name.split(".");
					name.forEach((e: any) => {
						if (!isNaN(parseInt(e))) {
							e = parseInt(e);
						}
					});
				}
			});
		}
		form.setFields(formattedErrors);
	};

	public getServerListPayload = (params: IServerSideGetRowsParams) => {
		return {
			filter_data: params.request.filterModel,
			sort_data: params.request.sortModel,
			per_page: (params.request.endRow ?? 0) - (params.request.startRow ?? 0),
			page: Math.ceil(
				((params.request.startRow ?? 0) + 1) /
					((params.request.endRow ?? 0) - (params.request.startRow ?? 0))
			),
		};
	};
}
