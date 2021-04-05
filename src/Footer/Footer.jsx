import React from 'react';
import "./Footer.css";

export class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (

            <>
                <footer className="flex-container-center footer-container footer-container_size text-description footer-text">

                    <div className="footer footer_size">

                        <div className="footer__block footer__block_size">
                            <p><u>Каталог</u></p>
                            <p>Легковые аккумуляторы</p>
                            <p>Грузовые аккумуляторы</p>
                            <p>Мото аккумуляторы</p>
                        </div>

                        <div className="footer__block footer__block_size">
                            <p><u>О нас</u></p>
                            <p>Оплата</p>
                            <p>Доставка</p>
                            <p>Акции и скидки</p>
                        </div>

                        <div className="footer__block footer__block_size">
                            <p>ИП оаропроарп</p>
                            <p>УНП 76н6767867878787</p>
                            <p>Время работы: с 8.00 до 20.00 без выходных</p>
                            <p>Контакты</p>
                        </div>

                    </div>

                </footer>
            </>

        );
    }
}





