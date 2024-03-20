import css from "./services-info-mobile.module.scss";
import { icons } from "../../../../assets";
import { usePagination } from "../../../../hooks/usePagination";
import { useMedia } from "../../../../hooks/useMedia";
import Slider from "../../../Slider/Slider";
import i18n from "../../../../utils/localization/i18n";
import { useState, useEffect } from "react";
import { fetchOurServices } from "../../../../adminPanel/serviceApiOurServices";
const ServiceInfoMobile = () => {
	const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	useEffect(() => {
		async function fetchServicesList() {
			try {
				setLoading(true);
				const response = await fetchOurServices();
				setProducts(response);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}
		fetchServicesList();
	}, []);
	const { chunkedData } = usePagination({
		perPage: 5,
		data: products,
	});

	useEffect(() => {
		const handleLanguageChange = () => {
			setCurrentLanguage(i18n.language);
		};
		i18n.on("languageChanged", handleLanguageChange);

		return () => {
			i18n.off("languageChanged", handleLanguageChange);
		};
	}, []);

	const { isMobile } = useMedia();

	const list = (cards) => {
		return (
			<ul className={css.services_list}>
				{cards.map((item) => {
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
								<p className={css.item_description}>{description}</p>
							</div>
						</li>
					);
				})}
			</ul>
		);
	};
	return <div>{isMobile && <Slider chunkedData={chunkedData} currentPage={list} />}</div>;
};
export default ServiceInfoMobile;
