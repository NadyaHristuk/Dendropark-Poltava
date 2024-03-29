import { List } from "antd";
import style from "./DocumentList.module.scss";

export const PanellListItem = ({ item, openFormEdit, openDeleteModal }) => {
  return (
    <List.Item key={item._id}>
      <List.Item.Meta
        title={
          // title
          item.ua.title &&
          item.en.title && (
            <p className={style.text} style={{ fontSize: "18px" }}>
              <span className={style.span}>Ua title: </span>
              {item.ua.title && item.ua.title} |{" "}
              <span className={style.span}>Eng title: </span>
              {item.en.title && item.en.title}
            </p>
          )
        }
        description={
          <>
            {/* img */}
            <div
              style={{
                display: "flex",
                gap: "40px",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {item?.image && <img width={272} alt={item?.en?.imgAlt} src={item?.image} />}
              {item?.mapImage && (
                <img width={272} alt={item?.en?.imgAlt} src={item?.mapImage} />
              )}
            </div>

            {/* subtitle */}
            {item?.ua?.subtitle && item?.en?.subtitle && (
              <p className={style.text}>
                <span className={style.span}>Ua subtitle: </span>
                {item?.ua?.subtitle} <br />{" "}
                <span className={style.span}>En subtitle: </span>
                {item?.en?.subtitle}
              </p>
            )}
            <br />

            {/* text or description */}
            <div className={style.textDesc}>
              <span className={style.spanDesc}>
                {item.en.description ? "Ua description: " : "Ua text: "}
              </span>{" "}
              {/* Використовуйте dangerouslySetInnerHTML для вставки HTML з бекенду */}
              <div
                dangerouslySetInnerHTML={{
                  __html: item.ua.description ? item.ua.description : item.ua.text,
                }}
              />
              <br />{" "}
              <span className={style.spanDesc}>
                {item.en.description ? "En description: " : "En text: "}
              </span>{" "}
              {/* Використовуйте dangerouslySetInnerHTML для вставки HTML з бекенду */}
              <div
                dangerouslySetInnerHTML={{
                  __html: item.en.description ? item.en.description : item.en.text,
                }}
              />
            </div>

            {/* alt for image */}
            {item.en.imgAlt && item.ua.imgAlt && (
              <p className={style.text}>
                <span className={style.span}>Ua alt text: </span> {item.ua.imgAlt}
                <br /> <span className={style.span}>En alt text: </span> {item.en.imgAlt}
              </p>
            )}

            {/* button text */}
            {item.en.buttonText && item.ua.buttonText && (
              <p className={style.text}>
                <span className={style.span}>Ua button text: </span> {item.ua.buttonText}
                <br /> <span className={style.span}>En button text: </span>{" "}
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
