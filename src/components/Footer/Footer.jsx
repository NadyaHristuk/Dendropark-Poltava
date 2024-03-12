import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Container from '../Container';
import s from './Footer.module.scss';
import { logo1x, logo2x } from '../../assets';
import FooterSection from './FooterSection/FooterSection';
import FooterSectionsWrapper from './FooterSectionsWrapper/FooterSectionsWrapper';
import { useMedia } from '../../hooks';

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
										{t('footer.sections.contacts.options.tel')}
									</a>
								)}
								{isMobile && (
									<a href="tel:+380502894133">
										{t('footer.sections.contacts.options.tel')}
									</a>
								)}
							</li>
							<li className={s.section_option}>
								<a href="mailTo:{t('footer.sections.contacts.options.email')}">
									{t('footer.sections.contacts.options.email')}
								</a>
							</li>
						</ul>
					</FooterSection>
				</FooterSectionsWrapper>
			</footer>
		</Container>
		// <footer>
		// 	<div>© {new Date().getFullYear()} My Website</div>
		// 	<nav>
		// 		<ul>
		// 			<li>
		// 				<NavLink to="/privacy-policy">Privacy Policy</NavLink>
		// 			</li>
		// 			<li>
		// 				<NavLink to="/terms-of-service">Terms of Service</NavLink>
		// 			</li>
		// 		</ul>
		// 	</nav>
		// </footer>
	);
};

export default Footer;
