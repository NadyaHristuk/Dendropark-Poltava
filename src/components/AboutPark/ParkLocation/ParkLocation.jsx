export const ParkLocation = ({ key, image, title, description }) => {
  return (
    <li key={key}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="">Подивитися на карті</a>
    </li>
  );
};
