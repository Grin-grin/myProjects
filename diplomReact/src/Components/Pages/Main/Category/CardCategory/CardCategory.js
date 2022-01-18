import React from "react";
import './CardCategory.css';
import {Link} from "react-router-dom";


export default class CardCategory extends React.Component {
    static defaultProps = {
        id: 0,
        categoryName: '',
        img: ''
    }
    render() {
        const { item } = this.props;
        return (
            <li className={'category__card'}>
                <Link to={`/card`} className={'category__card-link link'}>
                    <span className={'category__bg'}>
                        <img className={'category__img'} src={item.img} alt={item.categoryName}/>
                    </span>
                    {item.categoryName}
                </Link>
            </li>
        )
    }
}
