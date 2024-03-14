import React, { useContext, useState } from 'react';

const ContextAlert = React.createContext();

export const useCustomContext = () => {
	return useContext(ContextAlert);
};

const Context = ({ children }) => {
	const [adminEmail, setAdminEmail] = useState('');

	return (
		<ContextAlert.Provider
			value={{
				adminEmail,
				setAdminEmail,
			}}
		>
			{children}
		</ContextAlert.Provider>
	);
};

export default Context;
