import './Footer.css';
import logo from './footer_img/device_footer.svg';


function Footer() {
    return (
        <footer className={'footer'}>
            <div className={'footer__container container'}>
                <a href="/" className={'footer__logo link'}>
                    <img className="footer__logo-img"
                         src={logo}
                         alt="device"
                         width="145"
                         height="36"
                    />
                </a>
                <div className={'footer__center'}>
                    <p className={'footer__address'}>
                        Санкт-Петербург, набережная
                        реки Карповки, 5, литера П.
                    </p>
                    <ul className={'footer__nav-list list'}>
                        <li className={'footer__nav-item'}>
                            <a href="#delivery" className={'footer__nav-link menu__link link'}>
                                ДОСТАВКА
                            </a>
                        </li>
                        <li className={'footer__nav-item'}>
                            <a href="#warranty" className={'footer__nav-link menu__link link'}>
                                ГАРАНТИЯ
                            </a>
                        </li>
                        <li className={'footer__nav-item'}>
                            <a href="#contacts" className={' footer__nav-link menu__link link'}>
                                КОНТАКТЫ
                            </a>
                        </li>
                    </ul>
                    <div className={'footer__tel'}>
                        <a href="tel:+78128121212" className={'footer__tel-link link'}>
                            Тел: +7 (812) 812-12-12
                        </a>
                    </div>
                </div>
                <div className={'footer__bottom'}>
                    <div className={'footer__bottom-div'}>
                        <span className={'footer__bottom-divider'}></span>
                    </div>
                    <ul className={'footer__social list'}>
                        <li>
                            <a href={'https://ru-ru.facebook.com/'}
                               target='_blank' rel={'noreferrer'}
                               className={'footer__social-link footer__social-link_fb link'}
                            >
                            </a>
                        </li>
                        <li>
                            <a href={'https://ru-ru.facebook.com/'}
                               target={'_blank'} rel={'noreferrer'}
                               className={'footer__social-link footer__social-link_inst link'}
                            >
                            </a>
                        </li>
                        <li>
                            <a href={'https://ru-ru.facebook.com/'}
                               target={'_blank'} rel={'noreferrer'}
                               className={'footer__social-link footer__social-link_tw link'}
                            >
                            </a>
                        </li>
                    </ul>
                    <a href={'https://htmlacademy.ru/'}
                       target={'_blank'} rel={'noreferrer'}
                       className={'footer__bottom-link'}
                    >
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;