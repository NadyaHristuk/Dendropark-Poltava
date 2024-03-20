import { useState } from "react";
import styles from "./TrialSectionCard.module.scss";
import { CardContent } from "./CardContent";

export const TrialSectionCard = ({ card, lang }) => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const toggleMap = () => {
    setIsMapOpen((prevState) => !prevState);
  };

  return (
    <li className={styles.listItem}>
      <CardContent
        card={card}
        handleClick={toggleMap}
        isMapOpen={isMapOpen}
        lang={lang}
      />
    </li>
  );
};
