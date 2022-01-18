import './Hero.css'

export default function BtnSlider({direction, moveSlide}) {

    return (
        <button
            onClick={moveSlide}
            className={direction === 'slider__btn_next' ? 'slider__btn slider__btn_next' : 'slider__btn slider__btn_prev'}
        >
        </button>
    )
}