import React from "react";
import {Link} from "react-router-dom";
import './CardProduct.css'

// export default class CardProduct extends React.Component {
//     static defaultProps = {
//         id: 0,
//         productsName: '',
//         img: ''
//     }
//     render() {
        //const { item } = this.props;
const CardProduct = ({item, handleAddProductToCart}) => {
    return (
        <li className={'card__item'}>
            <Link to={`/${item.productsName}`} className={'card__item-link link'}>
                <img className={'card__item-img'} src={item.img} alt={item.productsName}/>
            </Link>
            <div className={'card__item-block'}>
                <h3 className={'card__item-title'}>
                    {item.productsName}
                </h3>
                <p className={'card__price'}>
                    {item.price} ₽
                </p>
            </div>
            <button
                className={'card__buy link'}
                onClick={() => handleAddProductToCart({
                    id: (Math.random() / Math.random()) * Math.random(),
                    productsName: item.productsName,
                    price: item.price,
                    img: item.img
                })}
            >
                КУПИТЬ
            </button>
        </li>
    )
}

export default CardProduct
