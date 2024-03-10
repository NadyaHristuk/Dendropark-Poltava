import { usePagination } from '../../../../hooks/usePagination';
import Pagination from '../../../Pagination/Pagination';
import data from '../../json/trialCards.js';
import { TrialSectionCard } from '../TrialSectionCard/TrialSectionCard';
import styles from './TrialSectionList.module.scss';

export const TrialSectionList = () => {
  const { currentPosts, ...options } = usePagination({
    postPerPage: 3,
    data,
  });

  return (
    <>
      <ul className={styles.list}>
        {currentPosts.map((card, i) => (
          <TrialSectionCard key={i} card={card} />
        ))}
      </ul>
      <Pagination props={options} />
    </>
  );
};
