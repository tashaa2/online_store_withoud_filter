import React from 'react';
import "./BatteryPage.css";
import { SnackBar } from "../SnackBar/SnackBar.jsx";
import { CardMini } from "../CardMini/CardMini.jsx";

// state.battery -> что-то динамическое куда применяться фильтры
// props.battery -> массив который имеет полный набор элементов по назначению (не отфильтрованный)

// в момент очистки фильтров нужно стейту присвоить значение пропс -> this.setState({ battery: this.props.battery })

export class BatteryPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            battery1: props.battery
        }
    }

    handleApplyFilteredBattery = filteredBattery => {
        // this.setState(prevState => ({ battery1: [...prevState.battery1, filteredBattery] }))
        this.setState({ battery1: filteredBattery })
    }

    render() {
        return (

            <>
                <main className="autopage autopage_size">

                    <div className="main">

                        <SnackBar onApplyFilteredBattery={this.handleApplyFilteredBattery} battery2={this.state.battery1} />

                        <div className="battery-for-car-container battery-for-car-container_size">

                            <div className="text-title block_padding-bottom">
                                {this.props.namePage}
                            </div>

                            <div className="battery battery_size">

                                {
                                    this.state.battery1.map((el, i) => {
                                        return (
                                            <CardMini
                                                valuta={el.valuta}
                                                id={el.id}
                                                index={i}
                                                naznathenie={el.naznathenie}
                                                brand={el.brand}
                                                model={el.model}
                                                poliarnost={el.poliarnost}
                                                emkost={el.emkost}
                                                startTok={el.startTok}
                                                voltage={el.voltage}
                                                garantia={el.garantia}
                                                size={el.size}
                                                price={el.price}
                                                image={el.image}
                                                onAddItemToBasket={this.props.onAddItemToBasket}
                                            />
                                        )
                                    })
                                }

                            </div>

                        </div>

                    </div>
                </main>
            </>

        );
    }
}






