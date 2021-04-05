import React from 'react';
import "./CardMini.css";
import { Link } from 'react-router-dom';
import { all_battery } from "../batteryArray.js";

export class CardMini extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            battery: [],            
        }
    } 
    
    render() {
        return (
            <>
                <div className="cardmini cardmini_size">      
                    {/* линк это и есть роутинг и взаимосвязь между компонентами поэтому обращаясь к id можно его извлечь в другой странице(в кардмакси) */}
                        
                    <p onClick={this.handleClickImageMini}>                                                                    
                        <Link battery={this.state.battery} to={`cardbattery/${this.props.id}`}>
                            <img src={this.props.image} alt="" srcset="" />                            
                        </Link>
                    </p>

                    <p className="text-subtitle">
                        Аккумулятор {this.props.brand} {this.props.model}
                    </p>

                    <p className="text-for-cardMini">
                        Полярность: {this.props.poliarnost}
                    </p>

                    <p className="text-for-cardMini">
                        Емкость: {this.props.emkost}
                    </p>

                    <p className="text-for-cardMini">
                        Стартовый ток: {this.props.startTok}
                    </p>

                    <p className="text-for-cardMini">
                        Напряжение: {this.props.voltage}
                    </p>

                    <p className="text-for-cardMini">
                        Гарантия: {this.props.garantia}
                    </p>

                    <p className="text-for-cardMini">
                        Размеры: {this.props.size}
                    </p>

                    <p className="text-for-cardMini">
                        Цена: {this.props.price} {this.props.valuta}
                    </p>

                    <button onClick={() => this.props.onAddItemToBasket(this.props.id)} className="cardmini__button-buy">Купить</button>

                </div>

            </>

        );
    }
}



