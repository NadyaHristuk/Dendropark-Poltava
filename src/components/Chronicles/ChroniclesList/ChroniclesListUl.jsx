import { usePagination } from '../../../hooks/usePagination.js';
import ChroniclesItem from '../ChroniclesItem/ChroniclesItem';
import Slider from '../../Slider/Slider.jsx';
import { LANGUAGE_STORAGE_KEY } from '../../../constants';
import css from './ChroniclesList.module.scss';

const ChroniclesListUl = ({ items }) => {
	const sortedChronicles = items.sort((a, b) => b.date - a.date);
	const { chunkedData } = usePagination({ perPage: 2, data: sortedChronicles });
	const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'ua';

	const list = (items) => {
		return (
			<ul className={css.list}>
{Array.isArray(items) && items.map((item) => (
  <li key={item._id} className={css.item}>
    <ChroniclesItem
      id={item[savedLanguage]._id}
      url={item.image}
      title={item[savedLanguage].title}
      description={item[savedLanguage].description}
    />
  </li>
))}
			</ul>
		);
	};

	return <Slider currentPage={list} chunkedData={chunkedData} />;
};

export default ChroniclesListUl;
