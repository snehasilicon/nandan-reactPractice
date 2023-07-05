import React from "react";
import { Layout } from "antd";
import HeaderLogoComponent from "../../Components/LogoComponent";
import HeaderMenuComponent from "../../Components/HeaderMenuComponent";
import HeaderSocialComponent from "../../Components/HeaderSocialComponent";



const HeaderView: React.FC = () => {
	return (
		<Layout.Header className="main__page__header">
			<div className="container">
				<HeaderLogoComponent />
				<HeaderMenuComponent />
				<HeaderSocialComponent />
			</div>
		</Layout.Header>
	);
};

export default HeaderView;
