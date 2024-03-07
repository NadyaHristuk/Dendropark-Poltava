import data from '../../json/trialCards';
import { TrialSectionCard } from '../TrialSectionCard/TrialSectionCard';
import styles from './TrialSectionList.module.scss';

export const TrialSectionList = () => {
  return (
    <ul className={styles.list}>
      {data.map((card, i) => (
        <TrialSectionCard key={i} card={card} />
      ))}
    </ul>
  );
};
