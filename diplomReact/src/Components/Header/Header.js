
import { Link } from "react-router-dom";
import logo from './Header_img/device.svg'
import './Header.css';
import {useState} from "react";
import {useSelector} from "react-redux";

const Header = () => {

    const [search, setSearch] = useState('');
    const [searchOn, setSearchOn] = useState(false);
    const {totalCount} = useSelector((cart) => cart);

    function searchOnHand(e) {
        setSearch(e.target.value)
        if (e.target.value) {
            setSearchOn(true)
        } else {
            setSearchOn(false)
        }
    }

    return (
        <header className={"header container"}>
            <div className={"header__container"}>
                <Link to={'/'} className={"header__logo link"}>
                    <img

                        className={"header__logo-img"}
                        src={logo}
                        alt="device"
                        width="145"
                        height="36"
                    />
                </Link>
                <div className={"header__menu menu"}>
                    <div className={"menu__user"}>
                        <form className={"menu__form-search"}>
                            <label className={"menu__search-label"} htmlFor="search">
                            </label>
                            <input
                                value={search}
                                id="search"
                                type="text"
                                className={searchOn === false ?
                                    'menu__search-field' : 'menu__search-field menu__search-field_active'}
                                name="search"
                                placeholder="Поиск по сайту"
                                onInput={searchOnHand}
                            />
                            <span className={"menu__search_custom"}>
                            </span>
                            <button type="submit" className={searchOn === false ?
                                'menu__search-btn' : 'menu__search-btn menu__search-btn_active' }>
                                Найти
                            </button>
                        </form>
                        <ul className={"menu__user-list list"}>
                            <li className={"menu__user-item user-enter"}>
                                <Link to={'/'} className={"menu__user-link enter link"}>
                                    Войти
                                </Link>
                            </li>
                            <li className={"menu__user-item user-compare"}>
                                <a href="/" className={"menu__user-link compare link"}>
                                    Сравнить
                                </a>
                            </li>
                            <li className={"menu__user-item user-basket"}>
                                <Link to={'/cart'} className={"menu__user-link basket link"}>
                                    <span className={"user-basket__count"}>
                                       {totalCount !== 0 ? totalCount : 0}
                                    </span>
                                    Корзина
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={"menu__main"}>
                        <nav className={"menu__nav"}>
                            <div className={"menu__nav-catalog"}>
                                <div className={"menu__nav-block"}>
                                    <Link to={'/catalog'} className={"menu__link-catalog menu__link_spacing link"}>
                                        КАТАЛОГ ТОВАРОВ
                                        <span className={"menu__link-custom"}>
                                        </span>
                                    </Link>
                                    <ul className={"menu__catalog menu__catalog_off list"}>
                                        <li className={"menu__catalog-item"}>
                                            <ul className={"menu__catalog-item__list list"}>
                                                <li>
                                                    <Link to={`/card`}
                                                       className={"menu__link-catalog menu__catalog-link link"}
                                                    >
                                                        Виртуальная реальность
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/card'}
                                                       className={"menu__link-catalog menu__catalog-link link"}
                                                    >
                                                        Моноподы для селфи
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/card'}
                                                       className={"menu__link-catalog menu__catalog-link link"}
                                                    >
                                                        Экшн-камеры
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={"menu__catalog-item"}>
                                            <ul className={"menu__catalog-item__list list"}>
                                                <li>
                                                    <Link to={'/card'}
                                                       className={"menu__link-catalog menu__catalog-link link"}
                                                    >
                                                        Фитнес-браслеты
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/card'}
                                                       className={"menu__link-catalog menu__catalog-link link"}
                                                    >
                                                        Умные часы
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={"menu__catalog-item"}>
                                            <ul className={"menu__catalog-item__list list"}>
                                                <Link to={'/card'}
                                                   className={"menu__link-catalog menu__catalog-link link"}
                                                >
                                                    Квадракоптеры
                                                </Link>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ul className={"menu__nav-list list"}>
                                <li className={"menu__nav-delivery"}>
                                    <a href="#delivery"
                                       className={"menu__link menu__link_spacing link"}
                                    >
                                        ДОСТАВКА
                                    </a>
                                </li>
                                <li className={"menu__nav-guarantee"}>
                                    <a href="#warranty"
                                       className={"menu__link menu__link_spacing link"}
                                    >
                                        ГАРАНТИЯ
                                    </a>
                                </li>
                                <li className={"menu__nav-contacts"}>
                                    <a href="#contacts"
                                       className={"menu__link menu__link_spacing link"}
                                    >
                                        КОНТАКТЫ
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;