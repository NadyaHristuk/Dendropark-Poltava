import styles from "./Login.module.scss";
import LoginForm from "../../components/forms/LoginForm";

const Login = () => {
  return (
    <div className={styles.container}>
      <h2>Увійти у панель адміністратора</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
