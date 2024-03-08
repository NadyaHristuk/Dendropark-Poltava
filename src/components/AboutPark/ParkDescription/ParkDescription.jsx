import { useTranslation } from 'react-i18next';
import css from './ParkDescription.module.scss';
import { useState } from 'react';
import { HistoryCreation } from '../HistoryCreation';
import { Picture } from '../Picture/Picture';
import { heroPicture } from '../Picture/heroPicture';
import Container from '../../Container/Container';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';

export const ParkDescription = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  return (
    <SectionWrapper>
      <h1 className={css.descriptionTitle}>Про парк</h1>
      <div className={css.heroPictureContainer}>
        <Picture pictures={heroPicture} />
      </div>
      <Container>
        <p className={css.parkDesription}>
          {t('about.descriptionFirstParagraph')}
          <br />
          {t('about.descriptionSecondParagraph')}
        </p>

        {!showMore ? (
          <button
            onClick={() => setShowMore(true)}
            className={css.readMoreButton}
          >
            {t('about.readMore')}
          </button>
        ) : (
          <HistoryCreation onClick={() => setShowMore(false)} />
        )}
      </Container>
    </SectionWrapper>
  );
};
