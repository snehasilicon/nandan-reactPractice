import React from "react";
import { Col, Row } from "antd";
import HeroImage from "../../assets/images/banner-img.svg";

const HeroSection: React.FC = () => {
	return (
		<section className="section hero__section">
			<div className="container">
				<div className="hero__section__content">
					<Row className="content_wrapper">
						<Col span={12}>
							<h6>Logistics</h6>
							<h1 className="section__big__title">Quick Transport <span>and</span></h1>
							<h4 className="section__subtitle"> Logistics Solution</h4>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eaque, molestiae amet temporibus, blanditiis quod repellat iure optio debitis, commodi quaerat neque perferendis.</p>
						</Col>
						<Col span={12} className="text-center">
							<img
								className=""
								src={HeroImage}
								alt="Hero Section Image"
							/>
						</Col>
					</Row>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
