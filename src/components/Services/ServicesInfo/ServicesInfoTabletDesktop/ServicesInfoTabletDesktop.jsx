import css from "./services-info-tablet-desktop.module.scss";
import i18n from "../../../../utils/localization/i18n";
import { icons } from "../../../../assets";
import { useState, useEffect } from "react";

const ServicesInfoTabletDesktop = ({ items }) => {
	const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

	useEffect(() => {
		const handleLanguageChange = () => {
			setCurrentLanguage(i18n.language);
		};
		i18n.on("languageChanged", handleLanguageChange);

		return () => {
			i18n.off("languageChanged", handleLanguageChange);
		};
	}, []);

	return (
		<div>
			<ul className={css.services_list}>
				{items.map((item) => {
					const { title, description } = item[currentLanguage];
					return (
						<li key={item._id} className={css.services_item}>
							<div className={css.item_icon}>
								<svg className={css.icon} width="32" height="32" aria-label="arrow-forward">
									<use href={`${icons}#icon-services-heart`}></use>
								</svg>
							</div>
							<div className={css.item_wrapper}>
								<h3 className={css.item_title}>{title}</h3>
								<div className={css.item_description}dangerouslySetInnerHTML={{ __html: description }} />
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ServicesInfoTabletDesktop;
