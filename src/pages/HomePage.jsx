import { AttentionVisitors } from '../components/AttentionVisitors/AttentionVisitors';

import s from './Home.module.scss';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className={s.container}>
      <AttentionVisitors></AttentionVisitors>
      <div className="park-info">
        <h1>{t('parkInfo.attentionVisitors')}</h1>
        <p>{t('parkInfo.parkPurpose')}</p>
        <h2>{t('parkInfo.behaviorRules')}</h2>
        <p>{t('parkInfo.mainRule')}</p>
        <div>
          <h3>{t('parkInfo.researchTrails')}</h3>
          <p>{t('parkInfo.researchTrailsDescription')}</p>
          <button onClick={() => alert(t('parkInfo.learnMore'))}>
            {t('parkInfo.learnMore')}
          </button>
        </div>
        <div>
          <h3>{t('parkInfo.chronicles')}</h3>
          <p>{t('parkInfo.chroniclesDescription')}</p>
          <button onClick={() => alert(t('parkInfo.learnMore'))}>
            {t('parkInfo.learnMore')}
          </button>
        </div>
        <div>
          <h3>{t('parkInfo.eventOrganizers')}</h3>
          <p>{t('parkInfo.eventOrganizersDescription')}</p>
          <button onClick={() => alert(t('parkInfo.learnMore'))}>
            {t('parkInfo.learnMore')}
          </button>
        </div>
        <div>
          <h3>{t('parkInfo.ourServices')}</h3>
          <p>{t('parkInfo.servicesDescription')}</p>
          <button onClick={() => alert(t('parkInfo.learnMore'))}>
            {t('parkInfo.learnMore')}
          </button>
        </div>
        <div>
          <h3>{t('parkInfo.administration')}</h3>
          <p>{t('parkInfo.administrationDescription')}</p>
          <button onClick={() => alert(t('parkInfo.learnMore'))}>
            {t('parkInfo.learnMore')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
