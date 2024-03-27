import { OrganizatorsListItem } from '../OrganizatorsListItem/OrganizatorsListItem';
import style from './OrganizatorsList.module.scss';

export const OrganizatorsList = ({ organizationRules }) => {
  return (
    <div className={style.list}>
      {organizationRules?.map((rule, i) => (
        <OrganizatorsListItem key={i} rule={rule} />
      ))}
    </div>
  );
};
