import PropTypes from 'prop-types';
import { RulesSectionListItem } from '../RulesSectionListItem/RulesSectionListItem';
import style from './RulesSection.module.scss';

export const RulesSectionList = ({ data }) => {
  return (
    <div className={style.list}>
      {data.map((rule, i) => (
        <RulesSectionListItem key={i} rule={rule} index={i} />
      ))}
    </div>
  );
};

RulesSectionList.propTypes = {
  data: PropTypes.array,
};
