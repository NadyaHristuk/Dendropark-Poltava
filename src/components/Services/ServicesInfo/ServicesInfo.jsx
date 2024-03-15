import ServiceInfoMobile from './ServicesInfoMobile/ServicesInfoMobile';
import { useMedia } from '../../../hooks/useMedia';
import ServicesInfoTabletDesktop from './ServicesInfoTabletDesktop/ServicesInfoTabletDesktop';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchOurServices } from '../../../adminPanel/serviceApiOurServices';
import i18n from '../../../utils/localization/i18n';
export const ServicesInfo = () => {
	const { isMobile, isTablet, isDesktop } = useMedia();

	const [service, setService] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchAllServices() {
			try {
				setLoading(true);
				const response = await fetchOurServices();
				setService(response);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}
		fetchAllServices();
	}, []);
	return (
		<>
			{isTablet || isDesktop ? (
				<ServicesInfoTabletDesktop items={service} />
			) : isMobile ? (
				<ServiceInfoMobile items={service} />
			) : null}
		</>
	);
};
