import React from 'react';
import "./CardMaxi.css";
import { all_battery } from "../batteryArray.js";

export class CardMaxi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }    

    render() {
        console.log(this.props)
        return (

            <>
                <div>    
                    
                    
                    {/* <button onClick={() => this.props.onAddItemToBasket(this.props.match.id)}>Купить</button> */}
                </div>

                {/* <div className="a">
                    jkhjhjhj
                    <img src={this.props.id} alt="" srcset="" /> 
                    
                </div>


                {/* <main className="autopage autopage_size">
                    
                    <div className="main">
                        
                        <SnackBar />

                        <div className="battery-for-car-container battery-for-car-container_size">

                            <div className="text-title block_padding-bottom">
                                {this.props.namePage}
                            </div>

                            <div className="battery battery_size">

                                {

                                    this.props.battery.map((el, i) => {
                                        return (
                                            <CardMini naznathenie={el.naznathenie}
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
                                            />
                                        )
                                    })
                                }


                            </div>

                        </div>

                    </div>
                </main> */}
            </>

        );
    }
}






