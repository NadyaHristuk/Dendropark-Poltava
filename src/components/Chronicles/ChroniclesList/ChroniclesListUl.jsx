import { usePagination } from '../../../hooks/usePagination.js';
import ChroniclesItem from '../ChroniclesItem/ChroniclesItem';
import Slider from '../../Slider/Slider.jsx';
import css from './ChroniclesList.module.scss';

const ChroniclesListUl = ({ items }) => {
	const sortedChronicles = items.sort((a, b) => b.date - a.date);
	const { chunkedData } = usePagination({ perPage: 2, data: sortedChronicles });

	const list = (items) => {
		return (
			<ul className={css.list}>
				{items.map(({ id, photo, title, description }) => (
					<li key={id} className={css.item}>
						<ChroniclesItem
							id={id}
							url={photo}
							title={title}
							description={description}
						/>
					</li>
				))}
			</ul>
		);
	};

	return <Slider currentPage={list} chunkedData={chunkedData} />;
};

export default ChroniclesListUl;
