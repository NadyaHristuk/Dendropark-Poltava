// eslint-disable-next-line react/prop-types
const AdministrationItem = ({ name, photo, photoRetina, text }) => {
  return (
    <li>
      <img src={photo} alt={name} srcSet={`${photo} 1x, ${photoRetina} 2x`} />
      <p>{name}</p>
      <p>{text}</p>
    </li>
  );
};

export default AdministrationItem;
