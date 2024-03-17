import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../Container/Container';
import scss from './NotFound.module.scss';
const NotFound = () => {
	const { t } = useTranslation();

	return (
		<section className={scss.section}>
			<div className={scss.wrapper}>
				<Container>
					<h2 className={scss.title}>404</h2>
					<p className={scss.text}>{t('notFound.text')}</p>
					<Link className={scss.link} to="/">
						{t('notFound.button')}
					</Link>
				</Container>
			</div>
		</section>
	);
};

export default NotFound;
