import axios from "axios";
import {useEffect, useState} from 'react';
import './category.css';
import CardCategory from "./CardCategory/CardCategory";


const Category = () => {
    const [items, setItems] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:3000/Server.json")
            .then(({data}) => setItems(data))
            .catch((error) => setError(`Что-то пошло не так: 
            ${error.response.status} ${error.response.statusText}`))
    }, [])
    return (
        <div className={'category container'}>
            <ul className={'category__list list'}>
                {
                    items && items.map((item) => (
                        <CardCategory
                            key={item.id}
                            item={item}
                        />

                    ))
                }
                {
                    error && <p>{error}</p>
                }
            </ul>
        </div>
    );
}

export default Category;
