import React from 'react';
import { Header } from "./Header/Header.jsx";
import { Main } from "./Main.jsx"
import { Footer } from "./Footer/Footer.jsx";
import { BatteryPage } from "./BatteryPage/BatteryPage.jsx";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { CardMaxi } from "./CardMaxi/CardMaxi.jsx";
import { Basket } from "./Basket/Basket.jsx";
import { all_battery } from "./batteryArray.js";

class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      basketIds: [],
    }
  }

  handleAddItemToBasket = (id) => {
    console.log(id)
    this.setState(prevState => ({ basketIds: [...prevState.basketIds, id] }))
    console.log(this.state.basketIds)
  }

  handleDeleteBatteryInBasket = (i) => {
    const { basketIds } = this.state;
    const del = [...basketIds.slice(0, i), ...basketIds.slice(i + 1)];
    this.setState({basketIds: del })
  }

  // чтобы связать компоненты не родитель-ребенок вместе пропсами нужно это делать через общего представителя-роутер
  // нужно в роутере создать функцию и стэйт и передать отдельно функцию одному, а стейт другому компоненту
  // функцию передали каждому компоненту где есть кнопка купить а стейт передали корзине
  render() {
    return (
      <>
        <BrowserRouter >
          <Header basketIds={this.state.basketIds} />
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/autopage' component={() => <BatteryPage onAddItemToBasket={this.handleAddItemToBasket} battery={all_battery.filter(item => item.naznathenie === "легковая машина")}
              namePage="Легковые автомобили" />} />
            <Route path='/gruzpage' component={() => <BatteryPage onAddItemToBasket={this.handleAddItemToBasket} battery={all_battery.filter(item => item.naznathenie === "грузовая машина")}
              namePage="Грузовые автомобили" />} />
            <Route path='/motopage' component={() => <BatteryPage onAddItemToBasket={this.handleAddItemToBasket} battery={all_battery.filter(item => item.naznathenie === "мотоцикл")}
              namePage="Мотоциклы" />} />
            <Route path='/cardbattery/:id' component={() => <CardMaxi onAddItemToBasket={this.handleAddItemToBasket}
                />} />
            <Route path='/basket' component={() => <Basket basketIds={this.state.basketIds}
                                                           onDeleteBatteryInBasket={this.handleDeleteBatteryInBasket} />} />

          </Switch>
          <Footer />
        </BrowserRouter >
      </>
    );
  }
}


export default Router;









