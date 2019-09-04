import React from 'react';
import '../App.css';
import { Card, CardWrapper} from 'react-swipeable-cards';
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse } from 'react-collapse';
//import { Transition } from 'react-transition-group';
//import { CSSTransition } from "react-transition-group";
//import { Collapse } from 'reactstrap';
//import { MediaQuery } from 'react-responsive';

library.add(fab, fas, far);

class App extends React.Component{

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false , isOpened: this.props.isOpened};
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }


  onSwipeNope() {
    console.log("pushed NopeButton.");
  }
  onSwipeLeft(data) {
    console.log(data.name + " was Leftswiped.");
    this.setState({ collapse: false });
  }
  onSwipeRight(data){
    console.log(data.name + " was Rightswiped.");
    this.setState({ collapse: false });
  }
  renderCards() {
    var person = [
                {
                  id: 1,
                  name: "Taro",
                  age: "22",
                  img: <img src = './taro.png' alt = 'taro' className = 'person-img'/>,
                  detail: "Taro's details screen"
                },
                {
                  id: 2,
                  name: "Hanako",
                  age: "21",
                  img: <img src = './hanako.png' alt = 'hanako' className = 'person-img'/>,
                  detail: "Hanako's details screen"
                },
                {
                  id: 3,
                  name: "Rina",
                  age: "23",
                  img: <img src = './rina.png' alt = 'rina' className = 'person-img'/>,
                  detail: "Rina's details screen"
                },
                {
                  id: 4,
                  name: "Kenta",
                  age: "25",
                  img: <img src = './kenta.png' alt = 'kenta' className = 'person-img'/>,
                  detail: "Kenta's details screen"
                }
              ];
    return person.map((d) => {
      return(
        <Card
        key={d.id}
        onSwipeLeft={this.onSwipeLeft.bind(this)}
        onSwipeRight={this.onSwipeRight.bind(this)}
        data={d}>          
          {d.img}
        <span className = 'font'>
        {d.name}, {d.age}
        </span>
          <div>
            <label　className = 'detail' onClick = {() => {this.toggle()}}>　</label>
            <Collapse isOpened={this.state.collapse}>
              <div>{d.detail}</div>
          </Collapse>
        </div>
        </Card>
        );
      });
    }

  render(){
    return (
    <div>
      <CardWrapper>
      {this.renderCards()}
      </CardWrapper>

      <div className = 'button-position'>
        <button onClick = {() => {this.onSwipeNope()}} className ='button nope'>
          <FontAwesomeIcon color='#dc143c' size ='lg' icon={['fas', 'times']} />
          </button>
        <button onClick = {() => {console.log('Like')}} className ='button'>
          <FontAwesomeIcon  color='#3cb371' size ='lg' icon={['fas', 'heart']} />
          </button>
        </div>   

    </div>
    );
  }
}

export default App;
