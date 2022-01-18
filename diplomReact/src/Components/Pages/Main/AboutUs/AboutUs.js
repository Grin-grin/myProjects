
import './AboutUs.css';

 function AboutUs() {
     return (
         <div className={'about-as container'}>
             <div className={'about-as__promo'}>
                 ДОСТАВИМ РЕДКИЙ ТОВАР ПОД ЗАКАЗ
             </div>
             <div className={'about-as__section'}>
                 <div className={'about-as__about about'}>
                     <span className={'about-as__divider'}>
                     </span>
                     <h2 className={'section__title'}>О нас</h2>
                     <p className={'about-as__description'}>
                         Огромный выбор гаджетов не оставит равнодушным гика,
                         который есть в каждом из нас.
                     </p>
                     <div className={'about__delivery'}>
                         <p className={'about-as__description about__delivery__description'}>
                             Мы можем доставить ваш товар в самые отдалённые уголки
                             России транспортными компаниями:
                         </p>
                         <ul className={'about__delivery__list list'}>
                             <li className={'about__delivery__item'}>
                                 Меловые линии
                             </li>
                             <li className={'about__delivery__item'}>
                                 СДИК
                             </li>
                             <li className={'about__delivery__item'}>
                                 ТоксБери
                             </li>
                         </ul>
                     </div>
                     <a href={'/'} className={'about-as__link link'}>
                         ПОДРОБНЕЕ О НАС
                     </a>
                 </div>
                 <div className={'about-as__contacts contacts'}>
                     <span className={'about-as__divider'}>
                     </span>
                     <h2 id={'contacts'} className={'section__title'}>Контакты</h2>
                     <p className={'about-as__description'}>
                         Вы можете забрать товар сами, заехав в наш офис.
                         Заодно,&nbsp;сможете проверить работоспособность покупки.
                     </p>
                     <div className={'contacts__contact contact'}>
                         <h3 className={'contacts__title'}>
                             Интернет-магазин «Девайс»
                         </h3>
                         <p className={'contacts__descriptions contact__address'}>
                             Санкт-Петербург, набережная реки Карповки, 5, литера П.
                         </p>
                         <p className={'contacts__descriptions contact__tel'}>
                             +7 (812) 812-12-12
                         </p>
                     </div>
                     <div className={'contacts__time time'}>
                         <h3 className={'contacts__title'}>
                             Время работы
                         </h3>
                         <ul className={'time__list list'}>
                             <li className={'contacts__descriptions'}>
                                 пн—пт: с 10:00 до 22:00
                             </li>
                             <li className={'contacts__descriptions'}>
                                 сб—вс: с 10:00 до 19:00
                             </li>
                         </ul>
                     </div>
                     <a href={'/'} className={'about-as__link link'}>
                         НАПИШИТЕ НАМ
                     </a>
                 </div>
             </div>
         </div>
     );
}

export default AboutUs;