import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_STORAGE_KEY, LANGUAGES } from '../../../constants';
import { useSelectStyles } from './LngSwitcher.styles';

const options = LANGUAGES.map((el) => ({ value: el, label: el }));

const LngSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState();

  const selectStyles = useSelectStyles();

  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLng = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (currentLng && LANGUAGES.find((item) => item === currentLng)) {
      i18n.changeLanguage(currentLng);
      setCurrentLanguage(currentLng);
    } else {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, options[0].value);
      i18n.changeLanguage(options[0].value);
      setCurrentLanguage(options[0].value);
    }
  }, [i18n]);

  const handleChangeLng = (option) => {
    setCurrentLanguage(option.value);
    i18n.changeLanguage(option.value);
  };

  return (
    <Select
      options={options}
      defaultValue={options.find((el) => el.value === currentLanguage)}
      value={options.find((el) => el.value === currentLanguage)}
      onChange={handleChangeLng}
      styles={selectStyles}
    />
  );
};

export default LngSwitcher;
