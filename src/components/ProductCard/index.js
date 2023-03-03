import classNames from 'classnames/bind';
import styles from './ProductCard.module.scss';

const cx = classNames.bind(styles);

export default function ProductCard({ data }) {
    return (
        <div className={cx('ProductCardContainer')}>
            <a className={cx('product-wrapper-link')}>
                <img height="300" width="300" className={cx('product-img')} src={data.img} alt=""></img>
            </a>
            <h1 className={cx('product-title')}>{data.title}</h1>
            {data.promo.status && (
                <div className={cx('product-promo-wrapper')}>
                    <p style={{ marginRight: '40px' }}>SIÊU TRỢ GIÁ </p>
                    {data.promo.price}
                </div>
            )}
            <div className={cx('product-info')}>
                <p className={cx('product-price')}>{data.price}</p>
                <p className={cx('product-selled')}>Đã bán: {data.selled}</p>
            </div>
        </div>
    );
}
