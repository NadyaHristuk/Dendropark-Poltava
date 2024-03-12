import styles from './Products.module.scss';
import ProductsForm from '../../components/forms/ProductsForm';

const Products = () => {
	return (
		<div className={styles.father}>
			<div className={styles.container1}>
				{' '}
				<ProductsForm />
			</div>
			<div className={styles.container2}></div>
		</div>
	);
};

export default Products;
