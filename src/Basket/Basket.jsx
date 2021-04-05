import React from 'react';
import "./Basket.css";
import { all_battery } from "../batteryArray.js";

export class Basket extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1,
            blockZakaz: false,
            basketId: this.props.basketIds,
            buttonZakaz: true,
        }
    }

    handleChangeCountPlus = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    handleChangeCountMinus = () => {
        this.setState(prevState => ({ count: prevState.count - 1 }));

        if (this.state.count <= 1) {
            this.setState({ count: 1 })
        }
    }

    handleChangeBlockZakaz = () => {
        this.setState(prevState => ({ blockZakaz: !prevState.blockZakaz }));
        this.setState(prevState => ({ buttonZakaz: !prevState.buttonZakaz }));        
    }    

    sum = (batteryelement) => {
        let summ = batteryelement.price * this.state.count
        return (summ)
    }

    render() {

        return (

            <>

                <div className="basket-wrapper basket-wrapper_size flex-container-center">

                    <div className="basket basket_size">

                        <p className="text-title">
                            Моя корзина
                        </p>

                        {
                            this.state.basketId.map((id, i) => {
                                const batteryelement = all_battery.find(el => el.id === id)
                                return (
                                    <div className="basket__card text-subtitle">

                                        <p className="basket__image"><img src={batteryelement.image} alt="" /></p>

                                        <div className="basket__block-info">

                                            <p>Цена: {batteryelement.price} {batteryelement.valuta}</p>
                                            <div className="basket__count">

                                                <button onClick={this.handleChangeCountMinus} className="basket__button">-</button>
                                                <p>
                                                    {this.state.count}
                                                </p>
                                                <button onClick={this.handleChangeCountPlus} className="basket__button">+</button>

                                            </div>

                                            <p>
                                                Всего: {this.sum(batteryelement)} {batteryelement.valuta}
                                            </p>

                                            <button onClick={() => this.props.onDeleteBatteryInBasket(i)} className="basket__button-del">Удалить</button>

                                        </div>

                                    </div>

                                )
                            })
                        }

                        <div className={this.state.buttonZakaz ? 'block_true' : 'block_none'} >
                           <button className="basket__button-zakaz" onClick={this.handleChangeBlockZakaz}>Оформить</button>
                        </div>

                        <div className={`${this.state.blockZakaz ? 'block_true' : 'block_none'} basket__block-zakaz`}>

                            <div className="basket__forma">
                                <p><input type="text" className="basket__input text-subtitle" placeholder="Ф.И.О." /></p>

                                <p><input type="text" className="basket__input text-subtitle" placeholder="Телефон" /></p>

                                <div>
                                    <p className="text-subtitle">Способ оплаты</p>

                                    <p className="text-title-zakaz"><input name="oplata" type="radio" />Наличными при получении</p>

                                    <p className="text-title-zakaz"><input name="oplata" type="radio" />Банковской картой при получении</p>

                                    <p className="text-title-zakaz"><input name="oplata" type="radio" />Онлайн</p>
                                </div>

                                <div>
                                    <p className="text-subtitle">Способ получения заказа</p>

                                    <p className="text-title-zakaz"><input name="zakaz" type="radio" />Доставка курьером</p>

                                    <p className="text-title-zakaz"><input name="zakaz" type="radio" />Самовывоз</p>
                                </div>

                                <button className="basket__button-zakaz">Заказать</button>

                            </div>

                        </div>

                    </div>

                </div>


            </>

        );
    }
}






