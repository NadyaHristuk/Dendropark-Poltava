import { useMedia } from '../../hooks/useMedia';
import {
  map_mob_1x,
  map_mob_2x,
  map_tab_1x,
  map_tab_2x,
  map_desk_1x,
  map_desk_2x,
} from '../../assets/images/map';
import data from "./data.json"
import scss from "./Map.module.scss"
import MapItem from './MapItem/MapItem';

const Map = () => {
  const { isDesktop, isMobile, isTablet } = useMedia();


  return (
    <>
      {(isMobile || isTablet) && (
        <picture>
          <source
            media="(min-width: 960px)"
            srcSet={`${map_tab_1x} 1x, ${map_tab_2x} 2x`}
          />
          <source
            media="(min-width: 320px)"
            srcSet={`${map_mob_1x} 1x, ${map_mob_2x} 2x`}
          />
          <img src={map_mob_1x} alt="Полтавський міський парк" />
        </picture>
      )}

      {isDesktop && (
        <div className={scss.map}>
          <img
            src={map_desk_1x}
            srcSet={`${map_desk_1x} 1x, ${map_desk_2x} 2x`}
            alt="Полтавський міський парк"
          />

          <ul>
            {data.map((item, index) => <MapItem key={item.id} className={`item-${index + 1}`} item={item}/>) }
          </ul>
        </div>
      )}
    </>
  );
};

export default Map;
