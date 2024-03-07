import css from './SectionWrapper.module.scss';

export const SectionWrapper = ({ children }) => {
  return <section className={css.container}>{children}</section>;
};
