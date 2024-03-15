import { useState } from "react";
import Select, { components } from "react-select";
import langs from "./langs.json";
import { icons } from "../../../assets/icons";

const INITIAL_STATE = {
    value: "ua",
    label: "UA",
};

const LangSelect = () => {
    const [selectedOption, setSelectedOption] = useState({ ...INITIAL_STATE });

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const CustomDropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <svg>
                    <use href={`${icons}#icon-lang-arrow`}></use>
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
