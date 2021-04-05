import React from 'react';
import "./Bell.css";

export class Bell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {
        return (
            <>
                <div className="block-opasity flex-container-center" onClick={this.props.onBellDel}>
                    
                    <div className="block-bell block-bell_size">
                        <div className="text-subtitle text-subtitle_color-white">
                            Оставьте Ваш номер и мы Вам перезвоним
                        </div>

                        <p><input type="text" className="basket__input text-subtitle" placeholder="Ф.И.О." /></p>

                        <p><input type="text" className="basket__input text-subtitle" placeholder="Телефон" /></p>
                        <button className="text-subtitle block-bell__button">Отправить</button>

                    </div>

                </div>

            </>
        );
    }
}