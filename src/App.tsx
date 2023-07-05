import { observer } from "mobx-react";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import PageSpinner from "./components/PageSpinner/PageSpinner";
import Router from "./config/RouterConfig";
import useStore from "./store";

const App: React.FC = observer(() => {
	const { AUTH } = useStore();
	const { InitializeApp, app_loading } = AUTH;

	useEffect(() => {
		InitializeApp();
	}, []);
	return (
		<Suspense fallback={<PageSpinner />}>
			<BrowserRouter>
				{app_loading ? <PageSpinner /> : <Router />}
			</BrowserRouter>
		</Suspense>
	);
});

export default App;
