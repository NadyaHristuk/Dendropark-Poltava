import { Link } from "react-router-dom";
import s from "./WelcomeContent.module.scss";
import { Button } from "antd";

const WelcomeContent = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Ласкаво просимо!</h1>
      <p className={s.description}>
        Ви знаходитесь в адміністративній панелі, де ви можете виконувати різні дії, такі
        як налаштування, керування контентом, здійснення операцій і багато іншого.
      </p>
      <p className={s.info}>Натисніть кнопку "Почати", щоб розпочати роботу.</p>
      <Link to='product' className={s.link}>
        <Button type='primary' className={s.btn}>
          Почати
        </Button>
      </Link>
    </div>
  );
};

export default WelcomeContent;
