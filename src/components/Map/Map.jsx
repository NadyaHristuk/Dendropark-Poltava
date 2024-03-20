import { useMedia } from '../../hooks/useMedia';
import {
	map_mob_1x,
	map_mob_2x,
	map_tab_1x,
	map_tab_2x,
	map_desk_1x,
	map_desk_2x,
	map_eng_1x,
	map_eng_2x,
} from '../../assets/images/map';
import scss from './Map.module.scss';
import MapItem from './MapItem/MapItem';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchLocations } from '../../adminPanel/serviceApiLocations';

const Map = () => {
	const { isDesktop, isMobile, isTablet } = useMedia();

	const [locations, setLocations] = useState([]);

	const selectedLanguage = localStorage.getItem('LANGUAGE_KEY') || 'ua';

	useEffect(() => {
		const getLocations = async () => {
			try {
				const data = await fetchLocations();
				setLocations(data);
			} catch (error) {
				console.log(error.message);
			}
		};

		getLocations();
	}, []);

	return (
		<>
			{(isMobile || isTablet) && (
				<>
					{selectedLanguage === 'ua' ? (
						<picture>
							<source
								media="(min-width: 960px)"
								srcSet={`${map_tab_1x} 1x, ${map_tab_2x} 2x`}
							/>
							<source
								media="(min-width: 320px)"
								srcSet={`${map_mob_1x} 1x, ${map_mob_2x} 2x`}
							/>
							<img className={scss.image} src={map_mob_1x} alt="Полтавський міський парк" />
						</picture>
					) : (
						<img
							className={scss.mapImage}
							src={map_eng_1x}
							srcSet={`${map_eng_1x} 1x, ${map_eng_2x} 2x`}
							alt="Полтавський міський парк"
						/>
					)}
				</>
			)}

			{isDesktop && (
				<div className={scss.map}>
					<>
						{selectedLanguage === 'ua' ? (
							<img
								className={scss.image}
								src={map_desk_1x}
								srcSet={`${map_desk_1x} 1x, ${map_desk_2x} 2x`}
								alt="Полтавський міський парк"
							/>
						) : (
							<img
								className={scss.mapImage}
								src={map_eng_1x}
								srcSet={`${map_eng_1x} 1x, ${map_eng_2x} 2x`}
								alt="Полтавський міський парк"
							/>
						)}
					</>

					<ul>
						{locations.map((item, index) => (
							<MapItem
								key={item._id}
								className={`item-${index + 1}`}
								item={item}
							/>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default Map;
