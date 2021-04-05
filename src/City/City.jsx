import React from 'react';
import "./City.css";

export class City extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: ["Минск", "Могилев"],
        }
    }

    handleCityChange = (city) => {
        this.props.onCityVariation(city);
    }

    render() {
        return (
            <>
                <div>                    

                    <div className="block-opasity flex-container-center block-flex_column text-subtitle text-subtitle_color-white" onClick={this.props.onCityDel}>

                        {this.state.city.map((el) => {
                            return (
                                <ul>
                                    <li onClick={() => this.handleCityChange(el)}>{`${el}`}</li>
                                </ul>
                            )
                        })}

                    </div>

                </div>

            </>
        );
    }
}






