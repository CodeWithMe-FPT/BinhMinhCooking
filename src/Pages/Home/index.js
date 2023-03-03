import ProductCategory from '~/components/ProductCategory';

const data1 = {
    img: 'https://thietbibepviet.vn/wp-content/uploads/2023/02/bo-2-noi-nau-pho-300x300.jpg',
    title: 'Bộ 2 nồi nấu phở',
    price: '11,000,000đ',
    selled: '0',
    promo: {
        status: true,
        price: '-1,000,000',
    },
};

const data2 = {
    img: 'https://thietbibepviet.vn/wp-content/uploads/2021/06/may-vat-long-ga-phi-50-quang-huy-xa-1-300x300.jpg',
    title: 'Máy Vặt Lông Gà Vịt 50cm (Phi 50)',
    price: '5,500,000đ',
    selled: '15',
    promo: {
        status: true,
        price: '-1,000,000',
    },
};

const data3 = {
    img: 'https://thietbibepviet.vn/wp-content/uploads/2017/04/xe-banh-mi-que-1m1-dep-gia-re-300x300.jpg',
    title: 'Xe bánh mì que 1m1 chất lượng cao',
    price: '7,500,000đ',
    selled: '2',
    promo: {
        status: true,
        price: '-1,000,000',
    },
};

function Home() {
    return (
        <div style={{ height: '10000px', background: '#ECF1F4' }}>
            <ProductCategory category="Nồi nấu phở điện" data={data1} />
            <ProductCategory category="Máy vặt lông gia xúc, gia cầm" data={data2} />
            <ProductCategory category="Xe bánh mì" data={data3} />
        </div>
    );
}

export default Home;
