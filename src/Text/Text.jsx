import React from 'react';
import "./Text.css";

export class Text extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (

            <>
                <section className="flex-container-center section-text-container section-text-container_size section-text-container_back">
                    <div className="section-text section-text_size">
                        <div className="text-title">
                            Интернет-магазин аккумуляторов
                        </div>

                        <div className="text-subtitle text-subtitle_indent">
                            Аккумулятор на авто является одним из самых уязвимых компонентов автомобиля.
                            При износе АКБ не стоит ждать, когда машина заглохнет в середине пути.
                            Мы предлагаем бесплатную диагностику аккумуляторных батарей, что позволит определить
                            состояние и дальнейшую работоспособность. В случае, если батарее ничем нельзя помочь,
                            ни восстановлением, ни зарядкой, ознакомьтесь с наиболее ходовыми моделями.
                        </div>

                        <div className="text-subtitle">
                            <ul>
                                <li>- Бесплатная доставка по Минску в течении 2-часов после заказа.</li>
                                <li>- Бесплатная доставка по Беларуси на следующий день.</li>
                                <li>- Все популярные формы оплаты.</li>
                                <li>- Рассрочка на 2 или 3 месяца с помощью 6 карт рассрочки.</li>
                                <li>- Прием старых аккумуляторов в зачет или с выплатой наличных на руки.</li>
                            </ul>
                        </div>

                        <div className="text-subtitle">
                            Мы продаем аккумуляторы с 2012 года, у нас вы можете подобрать аккумулятор на любой автомобиль.
                        </div>
                    </div>

                </section>
            </>

        );
    }
}





