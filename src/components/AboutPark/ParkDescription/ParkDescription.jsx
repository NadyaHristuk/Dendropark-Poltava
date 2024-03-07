import { useTranslation } from 'react-i18next';
import css from './ParkDescription.module.scss';
import { useState } from 'react';
import { HistoryCreation } from '../HistoryCreation';
import { Picture } from '../Picture/Picture';
import { heroPicture } from '../Picture/heroPicture';
import Container from '../../Container/Container';

export const ParkDescription = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Picture pictures={heroPicture} />
      <Container>
        <p className={css.parkDesription}>
          {t('about.descriptionFirstParagraph')}
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
    </>
  );
};
