import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";
import { City } from "../City/City.jsx";
import { Link } from 'react-router-dom';
import { all_battery } from "../batteryArray.js";

// как подключать страницы  https://habr.com/ru/post/329996/
// почему ссылка не окрашивается при наведении нужно в css применить .block:hover a {color: blanchedalmond;}
// как сделать кнопки внизу картинок
// как сделать затемнение

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isCity: false,
            choiceCity: "Выберите регион",
            hederScrollClassName: '',
        }
    }

    handleCity = () => {
        this.setState(prevState => ({ isCity: !prevState.isCity }));
    }
    //поскольку this.props и this.state могут обновляться асинхронно, не нужно полагаться на их текущее значение для вычисления следующего состояния.
    // нужно использовать функцию. Эта функция получит предыдущее состояние в качестве первого аргумента и значения пропсов непосредственно во время 
    // обновления в качестве второго аргумента:
    // ! говорит о "не". т.е. изсити будет не предыдущим состоянием


    handleCityVariation = (city) => {
        this.setState({ choiceCity: city })
        this.handleCity()
    }

    //изменять состояние стейта можно лишь в том компоненте, в котором создан стэйт. Поэтому в компоненте сити есть функция, 
    //которая вызывает функцию по изменению стэйта в компоненте хэдэр

    handleScroll = () => {
        if (window.scrollY > 1) {
            this.setState({ hederScrollClassName: 'fixed-scroll' });
        } else {
            this.setState({ hederScrollClassName: '' });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    //если нужно что-то добавить используем componentDidMount, если что-то удалить - componentWillUnmount
    // addEventListener - метод по добавлению  

    handleCityDel = () => {
        this.setState({ isCity: false })
    }

    handleInputFilter = () => {

    }

    filter = () => {

        let input = document.getElementById("input-filter");

        input.addEventListener("keyup", filterInput);

        function filterInput() {
            let filter = input.value.toLowerCase();
            let filterElements = document.getElementById("a");
            filterElements.forEach(item => {
                if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            })
        }
    }

    render() {

        return (
            <>
                <header className="header block-flex block-flex_column">

                    <div className="block-flex1 block-flex1_size string1 string1_colour text-description">

                        <div className="block-flex1 string1__about-company string1__about-company_size">
                            <p className="block_margin-left">
                                <Link to="/" className="link">Главная</Link>
                            </p>
                            <p id="a" className="block_margin-left">
                                О компании
                            </p>

                            <p id="a" className="block_margin-left">
                                Оплата
                            </p>

                            <p id="a" className="block_margin-left">
                                Доставка
                            </p>

                            <p className="block_margin-left">
                                Акции и скидки
                            </p>

                            <p className="block_margin-left">
                                Контакты
                            </p>
                        </div>

                        <div className="block-flex1 string1__town string1__town_width">
                            <p>Регион:</p>
                            <p className="block_margin-left" onClick={this.handleCity}>{this.state.choiceCity}</p>
                            {this.state.isCity && <City onCityVariation={this.handleCityVariation}
                                onCityDel={this.handleCityDel} />}
                        </div>

                    </div>

                    <div className={`text-subtitle string2 string2_fixed string2_scale string2_background ${this.state.hederScrollClassName}`}>

                        <div className="block-flex1 string2_size">

                            <div className="string2__logotip string2__logotip_size">
                                <Link to="/">
                                    <img src="data:image/png;base64,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" alt="" />
                                </Link>
                            </div>

                            <div className="block-flex1 block-search block-search_size">
                                <input className="block-search__input" type="text" id="input-filter" /> {this.filter}
                                <button className="block-search__button" onClick={this.handleInputFilter}>Поиск</button>
                            </div>

                            <div>
                                <p>
                                    Время работы:
                               </p>
                                <p>
                                    <b>с 8.00 до 20.00</b>
                                </p>
                            </div>

                            <div>
                                <a href="">+375(29)3293314</a>
                            </div>

                            <Link to="/basket" className="link">

                                <div className="block-flex1 string2__icon string2__icon_size">

                                    <p className="string2__icon_position">
                                        <p>
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </p>
                                        <p className="string2__nomber text-description text-description_color-red">
                                            {this.props.basketIds.length}
                                        </p>
                                    </p>
                                    <p className="block_margin-left">
                                        Корзина
                                    </p>

                                </div>
                            </Link>

                        </div>

                    </div>

                    <div className="block-flex1 text-title string3 string3_size">
                        <div className="block-flex1 string3__auto block block_border block_width">
                            <Link to="/autopage" className="link">Легковые авто</Link>
                        </div>

                        <div className="block-flex1 string3__truck block block_border block_width">
                            <Link to="/gruzpage" className="link">Грузовые авто</Link>
                        </div>

                        <div className="block-flex1 string3__moto block block_width">
                            <Link to="/motopage" className="link">Мотоциклы</Link>
                        </div>

                    </div>

                </header>
            </>

        );
    }
}






