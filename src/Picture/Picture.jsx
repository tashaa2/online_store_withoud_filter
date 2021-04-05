import React from 'react';
import "./Picture.css";
import picure1 from '../img/main_list/1.jpg';
import picure2 from '../img/main_list/2.jpg';
import picture3 from "../img/main_list/3.jpg";
import picture4 from "../img/main_list/4.png";
import { Bell } from "../Bell/Bell.jsx";


export class Picture extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            picture: [picure1, picure2, picture3, picture4],
            position: 0,
            bell: false,
        }
    }

    changeCurrentPosition = () => {
        this.setState((prevState) => {
            let pos = prevState.position + 1;
            let pic = this.state.picture.length - 1;
            if (pos > pic) {
                pos = 0
            }
            return {
                position: pos,
            }
        })
    }

    componentDidMount() {
        let timerId = setInterval(this.changeCurrentPosition, 2000);
        this.setState({ timerId })
    }

    //если нужно что-то добавить используем componentDidMount, если что-то удалить - componentWillUnmount

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    handleBell = () => {
        this.setState(prevState => ({ bell: !prevState.bell }));
    }

    handleClickButtonPicture = (i) => {
        this.setState({position: i})        
    }

    handleBellDel = () => {
        this.setState({bell: false})      
    } 

    render() {
        
        return (
            <>
                <section className="flex-container-center picture-container picture-container_size">

                    <div className="responsive-picture responsive-picture_size">
                        <img src={`${this.state.picture[this.state.position]}`} alt="" srcset="" />
                    </div>

                    <div>
                        {this.state.picture.map((el, i) => {
                            return (
                                <button key={i} className="button-picture button-picture_size" onClick={() => this.handleClickButtonPicture(i)}></button>
                            )
                        })}
                    </div>                    

                    {this.state.bell && <Bell onBellDel={this.handleBellDel}/>}

                    <div className="button-help">
                        <button className="text-description text-description_color-red" onClick={this.handleBell}>заказать звонок</button>
                        
                        <button className="text-description text-description_color-red">задать вопрос</button>
                    </div>

                </section>
            </>
        );
    }
}

