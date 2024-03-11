import ServiceInfoMobile from './ServicesInfoMobile/ServicesInfoMobile';
import { useMedia } from '../../../hooks/useMedia';
import ServicesInfoTabletDesktop from './ServicesInfoTabletDesktop/ServicesInfoTabletDesktop';

export const ServicesInfo = ({ items }) => {
	const { isMobile, isTablet, isDesktop } = useMedia();

	return (
		<>
			{isTablet || isDesktop ? (
				<ServicesInfoTabletDesktop items={items} />
			) : isMobile ? (
				<ServiceInfoMobile items={items} />
			) : null}
		</>
	);
};
