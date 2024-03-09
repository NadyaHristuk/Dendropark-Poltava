import styles from './SectionWrapper.module.scss';
import PropTypes from 'prop-types';

export const SectionWrapper = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
