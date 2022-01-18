import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './Cart.css';
import CartProduct from "./CartProduct"
import {removeCart, removeProductToCart} from "../../../redux/actions";

const Cart = () => {
    const dispatch = useDispatch();
    const {items, totalPrice, totalCount} = useSelector((cart) => cart);
    const onRemoveProduct = (id) => {
        dispatch(removeProductToCart(id))
    }

    const onRemoveAll = () => {
        if (window.confirm('Вы действительно хотите очистить корзину?')) {
            dispatch(removeCart())
        }
    }

    return (
        <div className={'cart container'}>
            <div className={'cart__container'}>
                <div className={'cart__top'}>
                    <h2 className={'cart__top-title section__title'}>
                        Корзина
                    </h2>
                    <ul className={'cart__breadcrumbs breadcrumbs list'}>
                        <li className={'breadcrumbs__item'}>
                            <Link to={'/'}
                                  className={'breadcrumbs__link breadcrumbs__link_effect link'}>
                                Главная
                            </Link>
                        </li>
                        <li className={'breadcrumbs__item'}>
                            <span className={'breadcrumbs__link  link'}>
                                Корзина
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={'cart__section'}>
                    {items && items.length > 0
                        ? (
                            <>
                                <h3 className={'cart__section__title'}> ВАШ ЗАКАЗ:</h3>
                                <button className={'cart__buy cart__buy_bg'}
                                        onClick={() => onRemoveAll()}
                                >
                                    ОЧИСТИТЬ КОРЗИНУ
                                </button>
                                <ul className={'cart__list list'}>
                                    {items.map((item) =>
                                        <CartProduct item={item} key={item.id}
                                                     onRemoveProduct={onRemoveProduct} />) }
                                </ul>
                                <div className={'cart__info'}>
                                    <p className={'cart__info-text'}>
                                        {totalCount !== 0 && `Всего товаров в корзине: ${totalCount} шт.`}
                                    </p>
                                    <p className={'cart__info-text'}>
                                        {totalPrice !== 0 && `Общая стоимость: ${totalPrice} ₽`}
                                    </p>
                                    <button className={'cart__buy'}>ОФОРМИТЬ ЗАКАЗ</button>
                                </div>
                            </>)
                        : (
                            <>
                                <h3 className={'cart__section__title'}> КОРЗИНА ПУСТАЯ</h3>
                                <div className={'cart__section__none'}>
                                    Перейти в&nbsp;
                                    <Link to={'/catalog'} className={'cart__section__catalog link'}>
                                        каталог товаров
                                    </Link>
                                </div>
                            </>
                        )
                    }



                </div>
            </div>
        </div>
    );
};



export default Cart;