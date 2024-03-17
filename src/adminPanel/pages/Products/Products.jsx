import styles from './Products.module.scss';
import { PanellList } from '../../components/PanellList/PanellList';
import { fetchProducts, deleteProduct } from '../../serviceApiProducts';
import { ChangedProvider } from '../../components/PanellList/ContextProvider/ChangeContext';
import ProductsForm from '../../components/forms/ProductsForm';

const Products = () => {
	return (
		<div className={styles.father}>
			<ChangedProvider>
				<div className={styles.container1}>
					{' '}
					<ProductsForm name="postForm" />
				</div>
				<div className={styles.container2}>
					<PanellList
						Form={ProductsForm}
						getOperation={fetchProducts}
						deleteOperation={deleteProduct}
						path="/products"
					/>
				</div>
			</ChangedProvider>
		</div>
	);
};

export default Products;
