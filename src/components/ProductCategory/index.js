import classNames from 'classnames/bind';
import ProductCard from '../ProductCard';
import styles from './ProductCategory.module.scss';

const cx = classNames.bind(styles);

export default function ProductCategory({ category, data }) {
    return (
        <div className={cx('DivContainerProductCategory')}>
            <div className={cx('ProductCategoryWrapper')}>
                <div className={cx('category-title-wrapper')}>
                    <div className={cx('category-title-container')}>
                        <h2 className={cx('category-title')}>{category}</h2>
                    </div>
                </div>
                <div className={cx('ListProdcutWrapper')}>
                    <div className="ProductCardWrapper">
                        <ProductCard data={data} />
                    </div>
                    <div className="ProductCardWrapper">
                        <ProductCard data={data} />
                    </div>
                    <div className="ProductCardWrapper">
                        <ProductCard data={data} />
                    </div>
                    <div className="ProductCardWrapper">
                        <ProductCard data={data} />
                    </div>
                    <div className="ProductCardWrapper">
                        <ProductCard data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}
