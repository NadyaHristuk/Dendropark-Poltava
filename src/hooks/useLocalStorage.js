import { useEffect, useRef, useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
	const [state, setState] = useState(() => {
		try {
			const data = JSON.parse(localStorage.getItem(key));
			return data || defaultValue;
		} catch (err) {
			localStorage.setItem(key, defaultValue);
			return defaultValue;
		}
	});

	const firstRender = useRef(true);

	useEffect(() => {
		if (!firstRender.current) {
			localStorage.setItem(key, JSON.stringify(state));
		}
	}, [state, key]);

	useEffect(() => {
		firstRender.current = false;
	}, []);

	return [state, setState];
};
