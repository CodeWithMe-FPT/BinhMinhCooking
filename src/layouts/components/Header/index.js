import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { MenuIcon } from '~/assets/icons/icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserFriends, faAddressCard, faUserPen, faReceipt } from '@fortawesome/free-solid-svg-icons';
import Search from '../Search';
import styles from './Header.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(styles);
library.add(faUserFriends, faAddressCard, faUserPen, faReceipt);

export default function Header() {
    return (
        <div className={cx('header-container')}>
            <img
                className={cx('banner-top')}
                src="https://thietbibepviet.vn/wp-content/uploads/2022/12/top-pc.jpg"
            ></img>
            <div className={cx('header-main-container')}>
                <div className={cx('header-main')}>
                    <div className={cx('header-top-container')}>
                        <div className={cx('logo')}>
                            <img width="205px" height="48px" className={cx('logo-web')} src={images.logo2}></img>
                            <Link to="/" className={cx('link-web')}></Link>
                        </div>
                        <Search />
                        <div className={cx('phone-container')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="42"
                                height="42"
                                fill="currentColor"
                                className={cx('phone-logo')}
                                viewBox="0 0 16 16"
                            >
                                <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z"></path>
                                <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z"></path>
                            </svg>
                            <div className={cx('phone-info')}>
                                <p className={cx('phone-text')}>Gọi miễn phí</p>
                                <Link to="/" className={cx('phone-number')}>
                                    0333159054
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={cx('header-bottom')}>
                        <ul className={cx('mega-menu-wrap')}>
                            <li className={cx('menu-item-container')}>
                                <Link className={cx('menu-item')}>
                                    <MenuIcon />
                                    <span className={cx('menu-text')}>Danh mục sản phẩm</span>
                                </Link>
                            </li>
                            <li className={cx('menu-item-container')}>
                                <Link className={cx('menu-item')}>
                                    <FontAwesomeIcon icon="fa-user-friends" color="white" fontSize="2rem" />
                                    <span className={cx('menu-text')}>Giới thiệu</span>
                                </Link>
                            </li>
                            <li className={cx('menu-item-container')}>
                                <Link className={cx('menu-item')}>
                                    <FontAwesomeIcon icon="fa-solid fa-address-card" color="white" fontSize="2.2rem" />
                                    <span className={cx('menu-text')}>Liên hệ</span>
                                </Link>
                            </li>
                            <li className={cx('menu-item-container')}>
                                <Link className={cx('menu-item')}>
                                    <FontAwesomeIcon icon="fa-solid fa-user-pen" color="white" fontSize="2rem" />
                                    <span className={cx('menu-text')}>Góc tư vấn</span>
                                </Link>
                            </li>
                            <li className={cx('menu-item-container')}>
                                <Link className={cx('menu-item')}>
                                    <FontAwesomeIcon icon="fa-solid fa-receipt" color="white" fontSize="2rem" />
                                    <span className={cx('menu-text')}>Vào bếp</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
