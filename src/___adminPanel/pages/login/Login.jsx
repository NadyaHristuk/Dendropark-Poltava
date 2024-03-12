import styles from './Login.module.scss';
import LoginForm from '../../components/forms/loginForm';

const Login = () => {
	return (
		<div className={styles.container}>
			<LoginForm />
		</div>
	);
};

export default Login;
