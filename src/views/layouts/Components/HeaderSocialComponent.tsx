import React from "react";
import { Link } from 'react-router-dom';
import { List, Avatar } from 'antd';
// import { TwitterOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import { ReactComponent as FbIcon } from "../../../assets/images/fbIcon.svg";
import { ReactComponent as InstaIcon } from "../../../assets/images/instaIcon.svg";
import { ReactComponent as TwtIcon } from "../../../assets/images/twtIcon.svg";
import { ReactComponent as LinkdinIcon } from "../../../assets/images/linkdinIcon.svg";


const HeaderSocialComponent: React.FC = () => {
    const socialMediaData = [
        {
          name: 'Twitter',
          icon: <FbIcon />,
          link: 'https://twitter.com/example'
        },
        {
          name: 'Facebook',
          icon: <InstaIcon />,
          link: 'https://facebook.com/example'
        },
        {
          name: 'Instagram',
          icon: <TwtIcon />,
          link: 'https://instagram.com/example'
        },
        {
            name: 'Linkdin',
            icon: <LinkdinIcon />,
            link: 'https://linkedin.com/example'
          },
        // Add more social media platforms as needed
      ];
	return (
		<>
            <div className="social_items">
                <List itemLayout="horizontal" dataSource={socialMediaData} renderItem={(item) => (
                    <List.Item className="social-media-item">
                    <Link to={item.link} className="social-link">
                        <List.Item.Meta  avatar={<Avatar icon={item.icon}  />} />
                    </Link>
                    </List.Item>
                    )}
                />
                <span className="follow_link">Follow This Page</span>
            </div>
            
        </>
	);
};

export default HeaderSocialComponent;
