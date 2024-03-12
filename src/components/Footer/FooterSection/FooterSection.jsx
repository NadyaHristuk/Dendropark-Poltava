import s from './FooterSection.module.scss';

const FooterSection = ({ children }) => {
	return <div className={s.section}>{children}</div>;
};

export default FooterSection;
