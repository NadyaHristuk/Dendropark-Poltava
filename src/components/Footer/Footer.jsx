import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

import Container from '../Container';
import s from './Footer.module.scss';
import { icons, logo1x, logo2x } from '../../assets';

import { useMedia } from '../../hooks';
import FooterSection from './FooterSection';
import FooterSectionsWrapper from './FooterSectionsWrapper';
import FooterCopyright from './FooterCopyright';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ModalStudents from '../ModalStudents/ModalStudents';

const Footer = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const { isMobile, isTablet, isDesktop } = useMedia(); // Визначаємо тип пристрою користувача
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleLogoClick = () => {
    // Виконуємо скрол до верху сторінки
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollWithOffset = el => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -90;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const titleArr = t('logo.title').split(' ');
  const logoTitleSpan = titleArr.splice(1, 1).toString();
  const logoTitleFirstWord = titleArr.splice(0, 1).toString();
  const logoTitleLastWord = titleArr.toString();

  return (
    <>
      <ModalStudents isOpen={modalIsOpen} isClose={closeModal} />
      <Container className={s.footer_container}>
        <footer className={s.footer}>
          <div className={s.footer_logo_and_sections_wrapper}>
            {pathname === '/' && (
              <Link to="/#header" className={s.logo} onClick={handleLogoClick}>
                <picture>
                  <source srcSet={`${logo1x} 1x, ${logo2x} 2x`} />
                  <img src={`${logo1x} 1x}`} alt={t('logo.alt')} className={s.logoImg} />
                </picture>
                <p className={s.logoTitle}>
                  {logoTitleFirstWord}
                  <br />
                  <span> {logoTitleSpan} </span>
                  {logoTitleLastWord}
                </p>
              </Link>
            )}
            {pathname !== '/' && (
              <HashLink smooth to="/#header" className={s.logo}>
                <picture>
                  <source srcSet={`${logo1x} 1x, ${logo2x} 2x`} />
                  <img src={`${logo1x} 1x}`} alt={t('logo.alt')} className={s.logoImg} />
                </picture>
                <p className={s.logoTitle}>
                  {logoTitleFirstWord}
                  <br />
                  <span> {logoTitleSpan} </span>
                  {logoTitleLastWord}
                </p>
              </HashLink>
            )}
            <FooterSectionsWrapper>
              {/* Взаємодія */}
              <FooterSection>
                <p className={s.section_title}>{t('footer.sections.interaction.title')}</p>
                <ul>
                  <li className={s.section_option}>
                    <HashLink smooth to="/vzaemodia#vzaemodia-section" scroll={scrollWithOffset}>
                      {t('footer.sections.interaction.options.researchTrails')}
                    </HashLink>
                  </li>
                  <li className={s.section_option}>
                    <HashLink smooth to="/vzaemodia#organizators-section" scroll={scrollWithOffset}>
                      {t('footer.sections.interaction.options.activities')}
                    </HashLink>
                  </li>
                  <li className={s.section_option}>
                    <HashLink smooth to="/vzaemodia#rules-section" scroll={scrollWithOffset}>
                      {t('footer.sections.interaction.options.rulesOfConduct')}
                    </HashLink>
                  </li>
                </ul>
              </FooterSection>
              {/* Матерали */}
              <FooterSection>
                <p className={s.section_title}>{t('footer.sections.materials.title')}</p>
                <ul>
                  <li className={s.section_option}>
                    <HashLink smooth to="/chronicles#litopys" scroll={scrollWithOffset}>
                      {t('footer.sections.materials.options.chronicle')}
                    </HashLink>
                  </li>
                  <li className={s.section_option}>
                    <HashLink smooth to="/chronicles#documents-section" scroll={scrollWithOffset}>
                      {t('footer.sections.materials.options.documents')}
                    </HashLink>
                  </li>
                  <li className={s.section_option}>
                    <HashLink smooth to="/#help-section" scroll={scrollWithOffset}>
                      {t('footer.sections.materials.options.help')}
                    </HashLink>
                  </li>
                </ul>
              </FooterSection>
              {/* Послуги */}
              <FooterSection className={s.section_159px}>
                <p className={s.section_title}>{t('footer.sections.services.title')}</p>
                <ul>
                  <li className={s.section_option}>
                    <HashLink smooth to="/services#services-section" scroll={scrollWithOffset}>
                      {t('footer.sections.services.options.ourServices')}
                    </HashLink>
                  </li>
                  <li className={s.section_option}>
                    <HashLink to="/services#seedlings-section" scroll={scrollWithOffset}>
                      {t('footer.sections.services.options.seedlings')}
                    </HashLink>
                  </li>
                </ul>
              </FooterSection>
              {/* Контакти */}
              <FooterSection>
                <p className={s.section_title}>{t('footer.sections.contacts.title')}</p>
                <ul>
                  <li className={s.section_option}>
                    {(isDesktop || isTablet) && (
                      <a href="https://t.me/DekorKultur" target="_blank">
                        +38 (050) 289-41-33
                      </a>
                    )}
                    {isMobile && <a href="tel:+380502894133">+38 (050) 289-41-33</a>}
                  </li>
                  <li className={s.section_option}>
                    <a href="mailTo:dekorkultur1@gmail.com">dekorkultur1@gmail.com</a>
                  </li>
                </ul>
              </FooterSection>
            </FooterSectionsWrapper>
          </div>
          <FooterCopyright>
            <div className={s.footer_copyright_text_wrapper}>
              <p className={s.footer_copyright}>{t('footer.copyright.owner')}</p>
              <a>
                <div className={s.footer_copyright_goit_wrapper} onClick={openModal}>
                  <p className={s.footer_copyright_goit_text}>{t('footer.copyright.created')}</p>
                  <svg className={s.footer_copyright_goit_icon_svg}>
                    <use href={`${icons}#icon-goit-logo`} className={s.footer_copyright_goit_icon_use}></use>
                    <use
                      href={`${icons}#icon-goit-logo-hover`}
                      className={s.footer_copyright_goit_icon_use_hover}
                    ></use>
                  </svg>
                </div>
              </a>
            </div>
            <div className={s.footer_social_networks_wrapper}>
              <a href="https://t.me/DekorKultur" target="_blank">
                <svg className={s.footer_social_networks_icon}>
                  <use href={`${icons}#icon-telegram`}></use>
                </svg>
              </a>
              <a href="https://www.facebook.com/Poltava.Dendropark" target="_blank">
                <svg className={s.footer_social_networks_icon}>
                  <use href={`${icons}#icon-facebook`}></use>
                </svg>
              </a>
            </div>
          </FooterCopyright>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
