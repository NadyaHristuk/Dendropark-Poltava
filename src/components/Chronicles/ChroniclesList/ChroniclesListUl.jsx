import { usePagination } from '../../../hooks/usePagination.js';
import ChroniclesItem from '../ChroniclesItem/ChroniclesItem';
import Slider from '../../Slider/Slider.jsx';
import css from './ChroniclesList.module.scss';
import chronicles from '../сhronicles';

<<<<<<< Updated upstream
export const ChroniclesListUl = () => {
=======
const ChroniclesListUl = () => {
>>>>>>> Stashed changes
	const sortedChronicles = chronicles.sort((a, b) => b.date - a.date);
	const { chunkedData } = usePagination({ perPage: 2, data: sortedChronicles });

	const list = (cards) => {
		return (
			<ul className={css.list}>
				{cards.map(({ id, photo, title, description }) => (
<<<<<<< Updated upstream
					<ChroniclesItem
						key={id}
						id={id}
						url={photo}
						title={title}
						description={description}
					/>
=======
					<li key={id} className={css.item}>
						<ChroniclesItem
							id={id}
							url={photo}
							title={title}
							description={description}
						/>
					</li>
>>>>>>> Stashed changes
				))}
			</ul>
		);
	};

	return <Slider currentPage={list} chunkedData={chunkedData} />;
};
<<<<<<< Updated upstream
=======

export default ChroniclesListUl;
>>>>>>> Stashed changes
