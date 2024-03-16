import { createContext, useContext, useState } from 'react';

const ChangedContext = createContext();

const useChanged = () => useContext(ChangedContext);

const ChangedProvider = ({ children }) => {
	const [changed, setChanged] = useState(false);

	return (
		<ChangedContext.Provider value={{ changed, setChanged }}>
			{children}
		</ChangedContext.Provider>
	);
};

export { useChanged, ChangedProvider };
