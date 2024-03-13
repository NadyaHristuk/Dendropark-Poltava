import {
	mobileVisual_1x,
	mobileVisual_2x,
	tabletVisual_1x,
	tabletVisual_2x,
	desktopVisual_1x,
	desktopVisual_2x,
} from '/src/assets/images/Visual';
import css from './Visual.module.scss';

export const Visual = () => {
	return (
		<picture>
			<source
				className={css.picture}
				srcSet={`
          ${desktopVisual_1x} 1x,
          ${desktopVisual_2x} 2x
        `}
				media="(min-width: 1440px)"
				width="1440"
				height="700"
				type="image/webp"
			/>
			<source
				className={css.picture}
				srcSet={`
          ${tabletVisual_1x} 1x,
          ${tabletVisual_2x} 2x
        `}
				media="(min-width: 960px)"
				width="960"
				height="465"
				type="image/jpg"
			/>
			<source
				className={css.picture}
				srcSet={`
          ${mobileVisual_1x} 1x,
          ${mobileVisual_2x} 2x
        `}
				media="(min-width: 300px)"
				width="390"
				height="465"
				type="image/jpg"
			/>
			<img
				className={css.picture}
				src="/src/assets/images/Visual/ImgDesktop@1x.jpg"
				alt="Alley in the park, autumn landscape"
				width="1440"
				height="700"
			/>
		</picture>
	);
};
