import { usePagination } from '../../../hooks/usePagination.js';
import Slider from '../../Slider/Slider.jsx';
import DocumentsItem from '../DocumentsItem/DocumentsItem';
import { LANGUAGE_STORAGE_KEY } from '../../../constants';
import css from './DocumentsList.module.scss';

const DocumentsListUI = ({ items }) => {
	const { chunkedData } = usePagination({ perPage: 2, data: items });
	const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'ua';

	const list = (items) => {
		return (
			<ul className={css.list}>
				{items.map((item) => (
					<li key={item._id} className={css.item}>
						<DocumentsItem
							title={item[savedLanguage].title}
							subtitle={item[savedLanguage].subtitle}
							description={item[savedLanguage].description}
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
