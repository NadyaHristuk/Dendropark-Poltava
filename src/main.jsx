import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/common.scss';
import './utils/localization/i18n';
import Context from './context/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Context>
				<App />
			</Context>
		</BrowserRouter>
	</React.StrictMode>
);
