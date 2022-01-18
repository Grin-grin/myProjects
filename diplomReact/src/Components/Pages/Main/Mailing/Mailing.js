import './Mailing.css';
import React, {useEffect, useState} from "react";
//import {useForm} from "react-hook-form";


const Mailing = () => {
    // const {register, handleSubmit, formState: {errors}, reset} = useForm({mode: 'onBlur'})
    const [email, setEmail] = useState('');
    const [emailOn, setEmailOn] = useState(false);
    const [emailError, setEmailError] = useState(false);

    function emailOnHand() {
        const input = document.getElementById('input');
        setEmail(input.value)
        if (input.value && !/^\w+([\n-]?\w+)*@\w+([\n-]?\w+)*(\.\w{2,3})+$/.test(input.value.toLowerCase())) {
            setEmailOn(true);
        } else {
            setEmailOn(false);
        }
    }

    function emailHandler() {
        const button = document.getElementById('button');
        const input = document.getElementById('input');
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const val = !/^\w+([\n-]?\w+)*@\w+([\n-]?\w+)*(\.\w{2,3})+$/.test(input.value.toLowerCase())
            if (val) {
                setEmailError(true)
            } else {
                setEmailError(false)
                document.getElementById('form').submit()
            }
        })
    }

    useEffect(() => {
        emailHandler();
    })



    return (
        <div className={'mailing'}>
            <div className={'mailing__container container'}>
                <div className={'mailing__text'}>
                    <h2 className={'mailing__title section__title'}>
                        Подпишитесь на рассылку
                    </h2>
                    <p className={'mailing__description'}>
                        Еженедельный дайджест с обзорами новинок,
                        длительными тест-драйвами, распаковками, а также акции,
                        спецпредложения и вот это вот всё.
                    </p>
                </div>
                <form id={'form'} className="mailing__form">
                    <input value={email}
                           id={'input'}
                           onInput={emailOnHand}
                           className={
                               (emailOn === false ? 'mailing__mail ' : 'mailing__mail mailing__mail_active' &&
                               emailError === false ? 'mailing__mail mailing__mail_active' : 'mailing__mail mailing__mail_error')}
                           type="text" name="mail"
                           placeholder={'Ваш e-mail'}
                    />
                    <button id={'button'}
                        type={"submit"}
                            onClick={emailHandler}
                        className={'mailing__btn'}>ПОДПИСАТЬСЯ</button>
                    <span className={'mailing__custom'}>Это бесплатно</span>
                </form>
            </div>
        </div>
    );
}

export default Mailing;