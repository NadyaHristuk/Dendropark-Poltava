import { usePagination } from '../../../../hooks/usePagination';
import data from '../../json/trialCards.js';
import { TrialSectionCard } from '../TrialSectionCard/TrialSectionCard';
import styles from './TrialSectionList.module.scss';
import Slider from '../../../Slider/Slider.jsx';

export const TrialSectionList = () => {
  const { chunkedData } = usePagination({ perPage: 3, data });

  const list = (cards) => {
    return (
      <ul className={styles.list}>
        {cards.map((card, idx) => (
          <TrialSectionCard key={idx} card={card} />
        ))}
      </ul>
    );
  };

  return <Slider currentPage={list} chunkedData={chunkedData} />;
};
