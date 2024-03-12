import { usePagination } from '../../../hooks/usePagination.js';
import Slider from '../../Slider/Slider.jsx';
import DocumentsItem from '../DocumentsItem/DocumentsItem';
import css from './DocumentsList.module.scss';

const DocumentsListUI = ({ items }) => {
	const { chunkedData } = usePagination({ perPage: 4, data: items });

	const list = (items) => {
		return (
			<ul className={css.list}>
				{items.map(({ id, title, subtitle, description, document }) => (
					<li key={id} className={css.item}>
						<DocumentsItem
							title={title}
							subtitle={subtitle}
							description={description}
							link={document}
						/>
					</li>
				))}
			</ul>
		);
	};
	return <Slider currentPage={list} chunkedData={chunkedData} />;
};

export default DocumentsListUI;
