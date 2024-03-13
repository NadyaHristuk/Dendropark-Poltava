import s from './FooterCopyright.module.scss';

const FooterCopyright = ({ children }) => {
	return <div className={s.footer_copyright_wrapper}>{children}</div>;
};

export default FooterCopyright;
