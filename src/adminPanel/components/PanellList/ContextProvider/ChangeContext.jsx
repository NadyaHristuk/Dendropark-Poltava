import { createContext, useState } from 'react';

const ChangedContext = createContext();

const ChangedProvider = ({ children }) => {
	const [changed, setChanged] = useState(false);

	return (
		<ChangedContext.Provider value={{ changed, setChanged }}>
			{children}
		</ChangedContext.Provider>
	);
};

export { ChangedProvider, ChangedContext };
