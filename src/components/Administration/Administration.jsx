import scss from "./Administration.module.scss"
import AdministrationItem from "./AdministrationItem/AdministrationItem"
import data from "./data"

const Administration = () => {

  return (
    <section className={scss.section}>
        <h2 className={scss.title}>Адміністрація</h2>
        <ul className={scss.list}>
            {data.map((person) => (
                <AdministrationItem key={person.id} {...person}/>
            ))}
        </ul>
    </section>
  )
}

export default Administration
