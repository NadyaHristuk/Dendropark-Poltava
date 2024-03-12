import { usePagination } from '../../../hooks/usePagination.js';
import ChroniclesItem from '../ChroniclesItem/ChroniclesItem';
import Slider from '../../Slider/Slider.jsx';
import css from './ChroniclesList.module.scss';
import chronicles from '../сhronicles';

export const ChroniclesListUl = () => {
	const sortedChronicles = chronicles.sort((a, b) => b.date - a.date);
	const { chunkedData } = usePagination({ perPage: 2, data: sortedChronicles });

	const list = (cards) => {
		return (
			<ul className={css.list}>
				{cards.map(({ id, photo, title, description }) => (
					<ChroniclesItem
						key={id}
						id={id}
						url={photo}
						title={title}
						description={description}
					/>
				))}
			</ul>
		);
	};

	return <Slider currentPage={list} chunkedData={chunkedData} />;
};
