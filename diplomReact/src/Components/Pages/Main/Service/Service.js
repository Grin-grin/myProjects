import { useState } from 'react';
import './Service.css';

function Service() {

    const [tabState, setTabState] = useState(1);

    const toggleTab = (index) => {
        setTabState(index);
    }

    return (
        <div className={'service'}>
            <div className={'service__container container'}>
                <div className={'service__tabs'}>
                    <ul className='service__tabs__list list'>
                        <li className={'service__tabs__item'}>
                            <button
                                className={tabState === 1 ? 'service__tab service__tab_active' : 'service__tab'}
                                onClick={() => toggleTab(1)}
                            >
                                ДОСТАВКА
                            </button>
                        </li>
                        <li className={'service__tabs__item'}>
                            <button
                                className={tabState === 2 ? 'service__tab service__tab_active' : 'service__tab'}
                                onClick={() => toggleTab(2)}
                            >
                                ГАРАНТИЯ
                            </button>
                        </li>
                        <li className={'service__tabs__item'}>
                            <button
                                className={tabState === 3 ? 'service__tab service__tab_active' : 'service__tab'}
                                onClick={() => toggleTab(3)}
                            >
                                КРЕДИТ
                            </button>
                        </li>
                    </ul>
                </div>
                <div id={'delivery'}
                     className={tabState === 1 ?
                         'service__text service__text_active service__text_delivery': 'service__text'}
                >
                    <h2 className={'service__title section__title'}>
                        Доставка
                    </h2>
                    <p className={'service__description service__description_delivery'}>
                        Мы с удовольствием доставим ваш товар прямо
                        к&nbsp;вашему подъезду совершенно бесплатно! Ведь
                        мы неплохо заработаем, поднимая его на ваш&nbsp;этаж.
                    </p>
                </div>
                <div id={'warranty'} className={tabState === 2 ?
                    'service__text service__text_active service__text_warranty': 'service__text'}
                >
                    <h2 className={'service__title section__title'}>
                        Гарантия
                    </h2>
                    <p className={'service__description service__description_warranty'}>
                        Если из-за возгорания купленного у нас товара у вас
                        сгорит дом — не переживайте, мы выдадим вам новый.
                        Товар, не дом, конечно же.
                    </p>
                </div>
                <div className={tabState === 3 ?
                    'service__text service__text_active service__text_credit': 'service__text'}
                >
                    <h2 className={'service__title section__title'}>
                        Кредит
                    </h2>
                    <p className={'service__description service__description_credit'}>
                        Залезть в долговую яму стало проще! Кредитные
                        консультанты подберут для вас наиболее выгодные
                        условия кредита. Выгодные для банка, разумеется.
                    </p>
                </div>
            </div>
        </div>
    );
}

// const tabs = document.querySelectorAll('.service__tab');

// const funcTabs = function (tabs) {
//     tabs.forEach((tabsItem) => {
//         tabsItem.addEventListener('click', (event) => {
//             const path = event.currentTarget.dataset.path;
//
//             document.querySelectorAll('.service__tab').
//             forEach((tabsItemActive) => {
//                 tabsItemActive.classList.remove('service__tab_active');
//                 tabsItemActive.classList.add('service__tab_off');
//             });
//             tabsItem.classList.remove('service__tab_off');
//             tabsItem.classList.add('service__tab_active');
//
//             document.querySelectorAll('.service__text').
//             forEach((tabsTextActive) => {
//                 tabsTextActive.classList.remove('service__text_active');
//             });
//             document.querySelector(`[data-target="${path}"]`).
//             classList.add('service__text_active');
//         });
//     });
// }
//
// funcTabs(tabs);

export default Service;