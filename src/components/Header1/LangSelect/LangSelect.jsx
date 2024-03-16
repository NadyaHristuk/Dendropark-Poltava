import { useEffect, useState } from 'react';
import Select, { components } from 'react-select';
import langs from './langs.json';
import { icons } from '../../../assets';
import "./transition.scss"
import { useTranslation } from 'react-i18next';

const INITIAL_STATE = {
	value: 'ua',
	label: 'UA',
};

const LangSelect = () => {
	const [selectedOption, setSelectedOption] = useState({ ...INITIAL_STATE });

	const {i18n} = useTranslation();

	useEffect(() => {
		const storedLanguage = langs.find(lang => lang.value === i18n.language);
		if (storedLanguage) {
			setSelectedOption(storedLanguage);
		}
	}, [i18n.language]);

	const handleChange = (selectedOption) => {
		setSelectedOption(selectedOption);
		i18n.changeLanguage(selectedOption.value)
	};

	const CustomDropdownIndicator = (props) => {
		return (
			<components.DropdownIndicator {...props}>
				<svg>
					<use href={`${icons}#icon-select-arrow`}></use>
				</svg>
			</components.DropdownIndicator>
		);
	};

	return (
			<Select
				value={selectedOption}
				onChange={handleChange}
				options={langs}
				isSearchable={false}
				className="react-select-container"
				classNamePrefix="react-select"
				components={{ DropdownIndicator: CustomDropdownIndicator }}
			/>
	);
};

export default LangSelect;
