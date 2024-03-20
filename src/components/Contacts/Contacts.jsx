import { icons } from '../../assets';
import { useMedia } from '../../hooks/useMedia';
import { useTranslation } from 'react-i18next';
import scss from './Contacts.module.scss';

const Contacts = () => {
  const { isMobile, isTablet, isDesktop } = useMedia();
  const { t } = useTranslation();

  return (
    <section className={scss.section}>
      <h2 className={scss.title}>{t('contacts.title')}</h2>
      <div className={scss.wrapper}>
        <div className={scss.address}>
          <h3 className={scss.addressTitle}>{t('contacts.address')}</h3>
          <div className={scss.info}>
            <p className={scss.text}>{t('contacts.office')}</p>
            <p className={scss.text}>{t('contacts.street')}</p>
          </div>
          <p className={scss.textDescription}>{t('contacts.location')}</p>
          <address>
            <ul className={scss.contacts}>
              <li>
                <p className={scss.contactsTitle}>{t('contacts.phone')}:</p>
                {(isDesktop || isTablet) && (
                  <a
                    className={scss.contactsLink}
                    href="https://t.me/DekorKultur"
                    target="_blank"
                  >
                    +38 (050) 289-41-33
                  </a>
                )}
                {isMobile && (
                  <a className={scss.contactsLink} href="tel:+380502894133">
                    +38 (050) 289-41-33
                  </a>
                )}
              </li>
              <li>
                <p className={scss.contactsTitle}>E-mail:</p>
                <a
                  className={scss.contactsLink}
                  href="mailTo:dekorkultur1@gmail.com"
                >
                  dekorkultur1@gmail.com
                </a>
              </li>
            </ul>
          </address>
          {(isTablet || isDesktop) && (
            <div className={scss.social}>
              <p className={scss.socialText}>{t('contacts.socialMedia')}</p>
              <a
                className={scss.socialLink}
                href="https://facebook.com/Poltava.Dendropark
"
                target="_blank"
              >
                <svg className={scss.socialIcon}>
                  <use href={`${icons}#icon-facebook`}></use>
                </svg>
              </a>
            </div>
          )}
        </div>
        <div className={scss.map}>
          <iframe
            className={scss.mapFrame}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5169.323716800518!2d34.5397694!3d49.6229792!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d8266fa9589adf%3A0x2f629b02e001ee70!2z0JTQtdC90LTRgNC-0L_QsNGA0Lo!5e0!3m2!1suk!2sua!4v1709730522905!5m2!1suk!2sua"
            loading="lazy"
          ></iframe>
          {isMobile && (
            <div className={scss.social}>
              <p className={scss.socialText}>{t('contacts.socialMedia')}</p>
              <a
                className={scss.socialLink}
                href="https://facebook.com/Poltava.Dendropark
"
                target="_blank"
              >
                <svg className={scss.socialIcon}>
                  <use href={`${icons}#icon-facebook`}></use>
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
