const AdministrationItem = ({id, name, photo, photoRetina, text}) => {
  return (
    <li>
        <img src={photo} alt={name} />
        <p>{name}</p>
        <p>{text}</p>
    </li>
  );
};

export default AdministrationItem;
