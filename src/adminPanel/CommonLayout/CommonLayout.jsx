import React, { Suspense } from 'react';

import {
	FileOutlined,
	ThunderboltOutlined,
	CalendarOutlined,
	PlusOutlined,
	HeartOutlined,
	SunOutlined,
	GlobalOutlined,
	ShopOutlined,
} from '@ant-design/icons';

import { Layout, Menu, theme } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import UserBar from '../components/UserBar/UserBar';

const { Header, Content } = Layout;

const labels = [
	'Welcome',
	'Product',
	'Trials',
	'Locations',
	'Documents',
	'Donation',
	'Services',
	'Events',
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
	PlusOutlined,
	FileOutlined,
	HeartOutlined,
	SunOutlined,
	CalendarOutlined,
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
		<Layout>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
						alignItems: 'center',
						display: 'flex',
					}}
				>
					<Menu
						style={{ width: '100%', display: 'inline-flex' }}
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={() => selectedKey(pathname)}
						items={items}
					/>
					<UserBar />
				</Header>
				<Content style={{ margin: '10px', overflow: 'initial' }}>
					<div
						style={{
							padding: 12,
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
