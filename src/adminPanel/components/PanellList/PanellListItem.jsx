import { List } from 'antd';
import style from './DocumentList.module.scss';

export const PanellListItem = ({ item, openFormEdit, openDeleteModal }) => {
	return (
		<List.Item key={item._id}>
			<List.Item.Meta
				title={
					// title
					item.uk.title &&
					item.en.title && (
						<p className={style.text} style={{ fontSize: '18px' }}>
							<span className={style.span}>Uk title: </span>
							{item.uk.title && item.uk.title} |{' '}
							<span className={style.span}>Eng title: </span>
							{item.en.title && item.en.title}
						</p>
					)
				}
				description={
					<>
						{/* img */}
						{item.image && (
							<img width={272} alt={item.en.imgAlt} src={item.image} />
						)}
						{/* subtitle */}
						{item.uk.subtitle && item.en.subtitle && (
							<p className={style.text}>
								<span className={style.span}>Uk subtitle: </span>
								{item.uk.subtitle} <br />{' '}
								<span className={style.span}>En subtitle: </span>
								{item.en.subtitle}
							</p>
						)}
						<br />

						{/* text or description */}
						<div className={style.textDesc}>
							<span className={style.spanDesc}>
								{item.en.description ? 'Uk description: ' : 'Uk text: '}
							</span>{' '}
							{/* Використовуйте dangerouslySetInnerHTML для вставки HTML з бекенду */}
							<div
								dangerouslySetInnerHTML={{
									__html: item.uk.description
										? item.uk.description
										: item.uk.text,
								}}
							/>
							<br />{' '}
							<span className={style.spanDesc}>
								{item.en.description ? 'En description: ' : 'En text: '}
							</span>{' '}
							{/* Використовуйте dangerouslySetInnerHTML для вставки HTML з бекенду */}
							<div
								dangerouslySetInnerHTML={{
									__html: item.en.description
										? item.en.description
										: item.en.text,
								}}
							/>
						</div>

						{/* alt for image */}
						{item.en.imgAlt && item.uk.imgAlt && (
							<p className={style.text}>
								<span className={style.span}>Uk alt text: </span>{' '}
								{item.uk.imgAlt}
								<br /> <span className={style.span}>En alt text: </span>{' '}
								{item.en.imgAlt}
							</p>
						)}

						{/* button text */}
						{item.en.buttonText && item.uk.buttonText && (
							<p className={style.text}>
								<span className={style.span}>Uk button text: </span>{' '}
								{item.uk.buttonText}
								<br /> <span className={style.span}>En button text: </span>{' '}
								{item.en.buttonText}
							</p>
						)}
						{/* document */}
						{item.document && (
							<p className={style.text}>
								<span className={style.span}>Document: </span> {item.document}
							</p>
						)}
						{/* number */}
						{item.number && (
							<p className={style.text}>
								<span className={style.span}>Number: </span> {item.number}
							</p>
						)}
						{/* distance */}
						{item.distance && (
							<p className={style.text}>
								<span className={style.span}>Distance: </span> {item.distance}
							</p>
						)}
						{/* link */}
						{item.link && (
							<p className={style.text}>
								<span className={style.span}>Link: </span> {item.link}
							</p>
						)}
						<div className={style.listItemActions}>
							<a
								key="list-loadmore-edit"
								className={style.listItemAction}
								onClick={() => openFormEdit(item._id)}
							>
								Редагувати
							</a>

							<a
								key="list-loadmore-delete"
								className={style.listItemAction}
								onClick={() => openDeleteModal(item._id)}
							>
								Видалити
							</a>
						</div>
					</>
				}
			/>
		</List.Item>
	);
};
