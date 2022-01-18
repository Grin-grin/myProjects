import './Catalog.css'
import Category from "../Main/Category/caregory";
import {Link} from "react-router-dom";

const Catalog = () => {
    return (
        <div className={'catalog'}>
            <div className={'catalog__container container'}>
                <h2 className={'catalog__title '}>
                    Каталог товаров
                </h2>
                <ul className={'breadcrumbs list'}>
                    <li className={'breadcrumbs__item'}>
                        <Link to={'/'}
                              className={'breadcrumbs__link breadcrumbs__link_effect link'}>
                            Главная
                        </Link>
                    </li>
                    <li className={'breadcrumbs__item'}>
                        <span className={'breadcrumbs__link link'}>
                            Каталог
                        </span>
                    </li>

                </ul>
            </div>
            <Category />
        </div>

    )
}

export default Catalog;