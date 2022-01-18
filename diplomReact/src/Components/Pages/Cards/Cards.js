import './Cards.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import CardProduct from "./CardProduct/CardProduct";
import {useDispatch} from "react-redux";
import {addProductToCart} from "../../../redux/actions";

const Cards = () => {
    const [items, setItems] = useState(null);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get("http://localhost:3000/product.json")
            .then((rel) => setItems(rel.data))
            .catch((error) => setError(`Что-то пошло не так: 
            ${error.response.status} ${error.response.statusText}`))
    }, [])

    const handleAddProductToCart = (obj) => {
       dispatch(addProductToCart(obj))
    }

    return (
        <div className={'card container'}>
            <div className={'card__container'}>
                <div className={'card__top'}>
                    <h2 className={'card__title section__title'}>
                        Моноподы для селфи
                    </h2>
                    <ul className={'breadcrumbs list'}>
                        <li className={'breadcrumbs__item'}>
                            <Link to={'/'}
                                  className={'breadcrumbs__link breadcrumbs__link_effect link'}>
                                Главная
                            </Link>
                        </li>
                        <li className={'breadcrumbs__item'}>
                            <Link to={'/catalog'} className={'breadcrumbs__link breadcrumbs__link_effect link'}>
                                Каталог
                            </Link>
                        </li>
                        <li className={'breadcrumbs__item'}>
                            <span className={'breadcrumbs__link  link'}>
                                Моноподы для селфи
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={'card__products'}>
                    <ul className={'card__list list'}>
                        {
                            items && items.map((item) => (
                                <CardProduct
                                    key={item.id}
                                    item={item}
                                    handleAddProductToCart={handleAddProductToCart}
                                />
                            ))
                        }
                        {
                            error && <p>{error}</p>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;