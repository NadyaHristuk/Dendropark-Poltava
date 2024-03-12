import React, { Suspense } from 'react';

import {
	FileOutlined,
	ThunderboltOutlined,
	CalendarOutlined,
	ShopOutlined,
	HeartOutlined,
	SunOutlined,
} from '@ant-design/icons';

import { Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

function getItemLabel(index) {
	const labels = [
		'Product',
		'Trials',
		'Events',
		'Documents',
		'Donation',
		'Services',
	];
	const currentItem = labels[index];

	return <Link to={currentItem.toLowerCase()}>{currentItem}</Link>;
}

const items = [
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
					defaultSelectedKeys={['1']}
					items={items}
				/>
			</Sider>
			<Layout style={{ marginLeft: 200 }}>
				<Header style={{ padding: 0, background: colorBgContainer }} />
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
