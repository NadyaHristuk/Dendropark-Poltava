import scss from './Container.module.scss';
import classNames from 'classnames';

const Container = ({ children, className }) => {
	return (
		<div className={classNames(scss.container, className)}>{children}</div>
	);
};

export default Container;
