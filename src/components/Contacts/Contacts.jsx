import scss from './Contacts.module.scss';

const Contacts = () => {
  return (
    <section className={scss.section}>
      <h2 className={scss.title}>Контакти</h2>
      <div className={scss.wrapper}>
        <div className={scss.address}>
          <h3 className={scss.addressTitle}>Адреса</h3>
          <div className={scss.info}>
            <p className={scss.text}>
              Офіс Комунального підприємства “Декоративні культури” що
              опікується парком:
            </p>
            <p className={scss.text}>
              вулиця Української Центральної Ради (9-го Січня) 2, Полтава, Полтавська, 36000
            </p>
          </div>
          <p className={scss.textDescription}>
              Парк знаходиться в північній частині міста. Найлегше дібратися до
              центрального входу з боку вулиці Яківчанської, від училища
              Зв’язку.
            </p>
          <address>
            <ul className={scss.contacts}>
              <li>
                <p className={scss.contactsTitle}>Телефон:</p>
                <a className={scss.contactsLink} href="tel:+380502894133">
                  +38 (050) 289-41-33
                </a>
              </li>
              <li>
                <p className={scss.contactsTitle}>E-mail:</p>
                <a
                  className={scss.contactsLink}
                  href="mailTo:dekorkultur1@gmail.com"
                >
                  dekorkultur1@gmail.com
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className={scss.map}>
          <iframe
            className={scss.mapFrame}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5169.323716800518!2d34.5397694!3d49.6229792!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d8266fa9589adf%3A0x2f629b02e001ee70!2z0JTQtdC90LTRgNC-0L_QsNGA0Lo!5e0!3m2!1suk!2sua!4v1709730522905!5m2!1suk!2sua"
            loading="lazy"
          ></iframe>
          <div className={scss.social}>
            <p className={scss.socialText}>Слідкуйте за нами в соцмережах</p>
            <svg>
              <use></use>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
