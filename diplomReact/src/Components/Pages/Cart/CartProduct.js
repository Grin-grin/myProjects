import './Cart.css';

const cartProduct = ({item, onRemoveProduct}) => {
    return (
        <li className={'cart__item'}>
            <img src={item.img} alt={item.productsName}
                 className={'cart__item-img'}
            />
            <h4 className={'cart__item-title'}>
                {item.productsName}
            </h4>
            <p className={'cart__item-price'}>
                {item.price} р.
            </p>
            <button
                className={'cart__item-del'}
                onClick={() => onRemoveProduct(item.id)}>&times;</button>
        </li>
    )
};

export default cartProduct



