import React from 'react';
import "./SnackBar.css";
import { RangeSlider } from "../Slider.jsx";

export class SnackBar extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            blockCena: false,
            blockEmkost: false,
            blockTok: false,
            blockPoliarnost: false,
            blockBrend: false,

            valueCena: [0, 1200],
            valueEmkost: [0, 1000]
        }
    }

    handleChangeBlockCena = () => {
        this.setState(prevState => ({ blockCena: !prevState.blockCena }));
    }

    handleChangeBlockEmkost = () => {
        this.setState(prevState => ({ blockEmkost: !prevState.blockEmkost }));
    }

    handleChangeBlockTok = () => {
        this.setState(prevState => ({ blockTok: !prevState.blockTok }));
    }

    handleChangeBlockPoliarnost = () => {
        this.setState(prevState => ({ blockPoliarnost: !prevState.blockPoliarnost }));
    }

    handleChangeBlockBrend = () => {
        this.setState(prevState => ({ blockBrend: !prevState.blockBrend }));
    }

    handleCountBatteryPlusLeft = () => {
        let plusLeft = document.getElementById("plusLeft")
        if (plusLeft.checked === true) {
            const filteredBattery = this.props.battery2.filter(item => item.poliarnost === "Прямая")
            this.props.onApplyFilteredBattery(filteredBattery)
        } else if (plusLeft.checked === false) {
            const filteredBattery = this.props.battery2
            this.props.onApplyFilteredBattery(filteredBattery)
        }

        let plusRight = document.getElementById("plusRight")
        if (plusRight.checked === true) {
            const filteredBattery = this.props.battery2.filter(item => item.poliarnost === "Обратная")
            this.props.onApplyFilteredBattery(filteredBattery)
        }
        //если здесь сделать проверку на false, то ничего не работает 

        if (plusLeft.checked === true && plusRight.checked === true) {
            const filteredBattery = this.props.battery2.filter(item => (item.poliarnost) === "Обратная" || (item.poliarnost) === "Прямая")
            this.props.onApplyFilteredBattery(filteredBattery)
        }
    }

    handleBrendChoice = () => {
        let maff = document.getElementById("maff")
        if (maff.checked === true) {
            const filteredBattery = this.props.battery2.filter(item => item.brand === "Maff")
            this.props.onApplyFilteredBattery(filteredBattery)
        }

        let tudor = document.getElementById("tudor")
        if (tudor.checked === true) {
            const filteredBattery = this.props.battery2.filter(item => item.brand === "Tudor")
            this.props.onApplyFilteredBattery(filteredBattery)
        }

        let volat = document.getElementById("volat")
        if (volat.checked === true) {
            const filteredBattery = this.props.battery2.filter(item => item.brand === "Volat")
            this.props.onApplyFilteredBattery(filteredBattery)
        }

        let topla = document.getElementById("topla")
        if (topla.checked === true) {
            const filteredBattery = this.props.battery2.filter(item => item.brand === "Topla")
            this.props.onApplyFilteredBattery(filteredBattery)
        }
    }

    handleMinCenaChange = e => {
        console.log('e', e)
        console.log(e.target.value)
        console.log(typeof e.currentTarget.value)
        console.log([Number(e.currentTarget.value), this.state.valueCena[1]])

        var minCena = document.getElementById("minCena").value;
        this.setState(prevState => ({ valueCena: [Number(minCena), prevState.valueCena[1]] }))
        const filteredBattery = this.props.battery2.filter(el => (el.price) >= Number(minCena) && (el.price) <= Number(this.state.valueCena[1]))

        console.log(filteredBattery)
        this.props.onApplyFilteredBattery(filteredBattery)
    }

    handleMaxCenaChange = e => {
        console.log('e', e)
        console.log(e.target.value)
        console.log(typeof e.currentTarget.value)
        console.log([this.state.valueCena[0], Number(e.currentTarget.value)])

        var maxCena = document.getElementById("maxCena").value;
        this.setState(prevState => ({ valueCena: [prevState.valueCena[0], Number(maxCena)] }))
        const filteredBattery = this.props.battery2.filter(el => (el.price) >= Number(this.state.valueCena[0]) && (el.price) <= Number(maxCena))

        console.log(filteredBattery)
        this.props.onApplyFilteredBattery(filteredBattery)
    }

    handleMinEmkostChange = (e) => {
        console.log('e', e)
        console.log(e.target.value)
        console.log(typeof e.currentTarget.value)
        console.log([Number(e.currentTarget.value), this.state.valueEmkost[1]])

        var minEmkost = document.getElementById("minEmkost").value;

        this.setState(prevState => ({ valueEmkost: [Number(minEmkost), prevState.valueEmkost[1]] }))
        const filteredBattery = this.props.battery2.filter(el => (el.emkost) >= Number(minEmkost) && (el.emkost) <= Number(this.state.valueEmkost[1]))

        console.log(filteredBattery)
        this.props.onApplyFilteredBattery(filteredBattery)
    }

    handleMaxEmkostChange = (e) => {
        console.log('e', e)
        console.log(e.target.value)
        console.log(typeof e.currentTarget.value)
        console.log([this.state.valueEmkost[0], Number(e.currentTarget.value)])

        var maxEmkost = document.getElementById("maxEmkost").value;
        this.setState(prevState => ({ valueEmkost: [prevState.valueEmkost[0], Number(maxEmkost)] }))
        const filteredBattery = this.props.battery2.filter(el => (el.emkost) >= Number(this.state.valueEmkost[0]) && (el.emkost) <= Number(maxEmkost))

        console.log(filteredBattery)
        this.props.onApplyFilteredBattery(filteredBattery)
    }

    render() {
        return (
            <>
                <section className="snackbar-box snackbar-box_size flex-container-center">

                    <div className="snackbar snackbar_size">

                        <div className="snackbar__elem-price">
                            <p className="text-subtitle block_padding-bottom" onClick={this.handleChangeBlockCena}>Цена:</p>

                            <div className={`text-for-cardMini block_padding-bottom ${this.state.blockCena ? 'block_true' : 'block_none'}`}>

                                <div className="block-with-input block_padding-bottom block-with-input_column">
                                    <div className="block-with-input">
                                        <p>от:</p>
                                        <input type="text" className="snackbar__input" value={this.state.valueCena[0]} id="minCena" onChange={this.handleMinCenaChange} />
                                    </div>

                                    <div className="block-with-input block_margin-left block_margin-left_none">
                                        <p>до:</p>
                                        <input type="text" className="snackbar__input" value={this.state.valueCena[1]} id="maxCena" onChange={this.handleMaxCenaChange} />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="snackbar__elem-price">
                            <p className="text-subtitle block_padding-bottom" onClick={this.handleChangeBlockEmkost}>Емкость, А/h:</p>

                            <div className={`text-for-cardMini block_padding-bottom ${this.state.blockEmkost ? 'block_true' : 'block_none'}`}>

                                <div className="block-with-input block_padding-bottom block-with-input_column">
                                    <div className="block-with-input">
                                        <p>от:</p>
                                        <input type="text" className="snackbar__input" value={this.state.valueEmkost[0]} id="minEmkost" onChange={this.handleMinEmkostChange} />
                                    </div>

                                    <div className="block-with-input block_margin-left block_margin-left_none">
                                        <p>до:</p>
                                        <input type="text" className="snackbar__input" value={this.state.valueEmkost[1]} id="maxEmkost" onChange={this.handleMaxEmkostChange} />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="snackbar__elem-price">
                            <p className="text-subtitle block_padding-bottom" onClick={this.handleChangeBlockTok}>Стартовый ток, А:</p>

                            <div className={`text-for-cardMini block-with-input block_padding-bottom ${this.state.blockTok ? 'block_true' : 'block_none'}`}>
                                
                                <div className="block-with-input block_padding-bottom block-with-input_column">
                                    <div className="block-with-input">
                                        <p>от:</p>
                                        <input type="number" className="snackbar__input" />
                                    </div>

                                    <div className="block-with-input block_margin-left block_margin-left_none">
                                        <p>до:</p>
                                        <input type="number" className="snackbar__input" />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="snackbar__elem-price">
                            <p className="text-subtitle block_padding-bottom" onClick={this.handleChangeBlockPoliarnost}>Полярность (клемами к себе):</p>

                            <div className={`text-for-cardMini block_padding-bottom ${this.state.blockPoliarnost ? 'block_true' : 'block_none'}`}>

                                <input type="checkbox" onClick={this.handleCountBatteryPlusLeft} id="plusLeft" />плюс слева <br />
                                <input type="checkbox" onClick={this.handleCountBatteryPlusLeft} id="plusRight" />плюс справа <br />

                            </div>
                        </div>

                        <div className="snackbar__elem-price">
                            <p className="text-subtitle block_padding-bottom" onClick={this.handleChangeBlockBrend}>Бренд:</p>

                            <div className={`text-for-cardMini block_padding-bottom ${this.state.blockBrend ? 'block_true' : 'block_none'}`}>
                                <input type="checkbox" onClick={this.handleBrendChoice} id="maff" />Maff <br />
                                <input type="checkbox" onClick={this.handleBrendChoice} id="tudor" />Tudor <br />
                                <input type="checkbox" onClick={this.handleBrendChoice} id="volat" />Volat <br />
                                <input type="checkbox" onClick={this.handleBrendChoice} id="topla" />Topla <br />
                            </div>
                        </div>

                    </div>

                </section>

            </>
        );
    }
}