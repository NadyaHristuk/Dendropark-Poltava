import css from './SectionWrapper.module.scss';
import clsx from 'clsx';

export const SectionWrapper = ({ children, isLowPadding }) => {
  const containerClass = clsx(css.container, {
    [css.lowPadding]: isLowPadding,
  });
  return <section className={containerClass}>{children}</section>;
};
