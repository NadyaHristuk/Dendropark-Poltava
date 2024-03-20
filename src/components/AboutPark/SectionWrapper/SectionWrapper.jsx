import css from './SectionWrapper.module.scss';
import clsx from 'clsx';

export const SectionWrapper = ({ children, isLowPadding, topPadding }) => {
	const containerClass = clsx(
		css.container,
		{
			[css.lowPadding]: isLowPadding,
		},
		{ [css.topPadding]: topPadding }
	);
	return <section className={containerClass}>{children}</section>;
};
