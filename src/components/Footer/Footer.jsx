import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

import Container from '../Container';
import s from './Footer.module.scss';
import { icons, logo1x, logo2x } from '../../assets';

import { useMedia } from '../../hooks';
import FooterSection from './FooterSection';
import FooterSectionsWrapper from './FooterSectionsWrapper';
import FooterCopyright from './FooterCopyright';

const Footer = () => {
	const { isMobile, isTablet, isDesktop } = useMedia(); // Визначаємо тип пристрою користувача
	const { t } = useTranslation();

	const titleArr = t('footer.logo.title').split(' ');
	const logoTitleSpan = titleArr.splice(1, 1).toString();
	const logoTitleFirstWord = titleArr.splice(0, 1).toString();
	const logoTitleLastWord = titleArr.toString();

	return (
		<Container className={s.footer_container}>
			<footer className={s.footer}>
				<Link to="/" className={s.logo}>
					<picture>
						<source srcSet={`${logo1x} 1x, ${logo2x} 2x`} />
						<img
							src={`${logo1x} 1x}`}
							alt={t('footer.logo.alt')}
							className={s.logoImg}
						/>
					</picture>
					<p className={s.logoTitle}>
						{logoTitleFirstWord}
						<br />
						<span> {logoTitleSpan} </span>
						{logoTitleLastWord}
					</p>
				</Link>
				<FooterSectionsWrapper>
					{/* Взаємодія */}
					<FooterSection>
						<p className={s.section_title}>
							{t('footer.sections.interaction.title')}
						</p>
						<ul>
							<li className={s.section_option}>
								<Link to="/vzaemodia">
									{t('footer.sections.interaction.options.researchTrails')}
								</Link>
							</li>
							<li className={s.section_option}>
								<Link to="/vzaemodia">
									{t('footer.sections.interaction.options.activities')}
								</Link>
							</li>
							<li className={s.section_option}>
								<Link to="/vzaemodia">
									{t('footer.sections.interaction.options.rulesOfConduct')}
								</Link>
							</li>
						</ul>
					</FooterSection>
					{/* Матерали */}
					<FooterSection>
						<p className={s.section_title}>
							{t('footer.sections.materials.title')}
						</p>
						<ul>
							<li className={s.section_option}>
								<Link to="/chronicles">
									{t('footer.sections.materials.options.chronicle')}
								</Link>
							</li>
							<li className={s.section_option}>
								<Link to="/chronicles">
									{t('footer.sections.materials.options.documents')}
								</Link>
							</li>
							<li className={s.section_option}>
								<Link to="/">
									{t('footer.sections.materials.options.help')}
								</Link>
							</li>
						</ul>
					</FooterSection>
					{/* Послуги */}
					<FooterSection className={s.section_159px}>
						<p className={s.section_title}>
							{t('footer.sections.services.title')}
						</p>
						<ul>
							<li className={s.section_option}>
								<Link to="/services">
									{t('footer.sections.services.options.ourServices')}
								</Link>
							</li>
							<li className={s.section_option}>
								<Link to="/services">
									{t('footer.sections.services.options.seedlings')}
								</Link>
							</li>
						</ul>
					</FooterSection>
					{/* Контакти */}
					<FooterSection>
						<p className={s.section_title}>
							{t('footer.sections.contacts.title')}
						</p>
						<ul>
							<li className={s.section_option}>
								{(isDesktop || isTablet) && (
									<a href="https://t.me/MaxMakukha" target="_blank">
										+38 (050) 289-41-33
									</a>
								)}
								{isMobile && (
									<a href="tel:+380502894133">+38 (050) 289-41-33</a>
								)}
							</li>
							<li className={s.section_option}>
								<a href="mailTo:dekorkultur1@gmail.com">
									dekorkultur1@gmail.com
								</a>
							</li>
						</ul>
					</FooterSection>
				</FooterSectionsWrapper>
				<FooterCopyright>
					<p className={s.footer_copyright}>
						© Полтавський міський парк / 2024
					</p>
					<a>
						<div className={s.footer_copyright_goit_wrapper}>
							<p className={s.footer_copyright_goit_text}>
								Сайт розроблений студентами
							</p>
							<svg className={s.footer_copyright_goit_logo}>
								<use href={`${icons}#icon-goit-logo`}></use>
							</svg>
						</div>
					</a>
				</FooterCopyright>
			</footer>
		</Container>
	);
};

export default Footer;
