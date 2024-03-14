import React, { Suspense } from 'react';

import {
	FileOutlined,
	ThunderboltOutlined,
	CalendarOutlined,
	ShopOutlined,
	HeartOutlined,
	SunOutlined,
	GlobalOutlined,
} from '@ant-design/icons';

import { Layout, Menu, theme } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import UserBar from '../components/UserBar/UserBar';

const { Header, Content, Sider } = Layout;

const labels = [
	'Welcome',
	'Product',
	'Trials',
	'Locations',
	'Documents',
	'Donation',
	'Services',
];

function getItemLabel(index) {
	const currentItem = labels[index];
	const path = currentItem !== 'Welcome' ? currentItem.toLowerCase() : '/admin';

	return <Link to={path}>{currentItem}</Link>;
}

function selectedKey(pathname) {
	let index = labels.findIndex((label) =>
		pathname.includes(label.toLowerCase())
	);

	if (index === -1) index += 1;

	return [`${index + 1}`];
}

const items = [
	GlobalOutlined,
	ShopOutlined,
	ThunderboltOutlined,
	CalendarOutlined,
	FileOutlined,
	HeartOutlined,
	SunOutlined,
].map((icon, index) => ({
	key: String(index + 1),
	icon: React.createElement(icon),
	label: getItemLabel(index),
}));

const CommonLayout = () => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	const { pathname } = useLocation();

	return (
		<Layout hasSider>
			<Sider
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					left: 0,
					top: 0,
					bottom: 0,
				}}
			>
				<div className="demo-logo-vertical" />
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={() => selectedKey(pathname)}
					items={items}
				/>
			</Sider>
			<Layout style={{ marginLeft: 200 }}>
				<Header style={{ padding: 0, background: colorBgContainer }}>
					<UserBar />
				</Header>
				<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
					<div
						style={{
							padding: 24,
							textAlign: 'center',
							background: colorBgContainer,
							borderRadius: borderRadiusLG,
						}}
					>
						<Suspense fallback={<p>Loading...</p>}>
							<Outlet />
						</Suspense>
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default CommonLayout;
