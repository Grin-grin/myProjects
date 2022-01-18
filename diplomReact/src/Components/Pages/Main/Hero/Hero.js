import {useState} from "react";
import './Hero.css';
import BtnSlider from "./BtnSlider";


const Hero = () => {
    const slider = [
        {   id: '01',
            alt: 'Квадракоптер',
            img: './Hero_img/quadcopter.png',
            title: 'Порхает как бабочка, жалит как пчела!',
            description: `Этот обычный, на первый взгляд, квадрокоптер оснащен мощным лазером,
                        замаскированным под стандартную камеру.`,
            params: [
                {
                    name: 'Дальность полета',
                    param: '800 м'
                },
                {
                    name: 'Радиус поражения',
                    param: '50 м'
                }
            ],
            btn: 'ПОДРОБНЕЕ'
        },
        {   id: '02',
            alt: 'Браслет',
            img: './Hero_img/fitness_bracelet.png',
            title: `Худеем правильно!`,
            description: `Мотивирующие фитнес-браслеты помогут найти в себе 
                          силы не пропускать занятия и соблюдать диету.`,
            params: [
                {
                    name: 'Без подзарядки',
                    param: '48 часов'
                }
            ],
            btn: 'ПОДРОБНЕЕ'
        },
        {   id: '03',
            alt: 'Квадракоптер',
            img: './Hero_img/selfie_stick.png',
            title: 'Делай селфи, как Бен Стиллер!',
            description: `Этот обычный, на первый взгляд, квадрокоптер оснащен мощным лазером,
                        замаскированным под стандартную камеру.`,
            params: [
                {
                    name: 'Длина палки',
                    param: '8,5 м'
                },
                {
                    name: 'Вес палки',
                    param: '5 кг'
                },
                {
                    name: 'Материал',
                    param: 'Карбон'
                }
            ],
            btn: 'ПОДРОБНЕЕ'
        }
    ];

    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () => {
        if (slideIndex !== slider.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === slider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(slider.length)
        }
    }

    const moveDot = (index) => {
        setSlideIndex(index)
    }

    return (
        <div className={'hero container'}>
            <h1 className={'title-opacity'}>
                Магазин девайсов
            </h1>
            <BtnSlider moveSlide={prevSlide} direction={'slider__btn_prev'}/>
            <BtnSlider moveSlide={nextSlide} direction={'slider__btn_next'}/>
            <div className={'hero__dots'}>
                {Array.from({length: slider.length}).map((item, index) =>(
                    <button key={index}
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? 'hero__dot hero__dot_active' : 'hero__dot'}>
                    </button>
                ))}
            </div>
            {
                slider.map((elem,index) => {
                    return (
                        <div key={elem.id}
                             className={
                                 slideIndex === index + 1 ?
                                     'hero__slide active-slide' : 'hero__slide'}>
                            <span className={'hero__slide__number'}>
                                {elem.id}
                            </span>

                            <img className={'hero__img'} src={elem.img} alt={elem.alt}/>

                            <div className={'hero__text'}>
                                <h2 className={'hero__title section__title'}>
                                    {elem.title}
                                </h2>
                                <p className={'hero__description'}>
                                    {elem.description}
                                </p>
                                <a href={'/'} className={'hero__link link'}>
                                    {elem.btn}
                                </a>
                                <div className={'hero__params'}>
                                    {
                                        slider[index].params.map((param, index) => {
                                            return (
                                                <div key={index} className={'hero__params__block'}>
                                                    <p className={'hero__params__param'}>{param.param}</p>
                                                    <p className={'hero__params__name'}>{param.name}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Hero;