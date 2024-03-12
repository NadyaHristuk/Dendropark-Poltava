import s from './FooterSectionsWrapper.module.scss';

const FooterSectionsWrapper = ({ children }) => {
	return <div className={s.footer_sections_wrapper}>{children}</div>;
};

export default FooterSectionsWrapper;
