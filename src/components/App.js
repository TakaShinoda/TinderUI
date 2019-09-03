import React from 'react';
import '../App.css';
import { Card, CardWrapper} from 'react-swipeable-cards';
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { Transition } from 'react-transition-group';
//import { CSSTransition } from "react-transition-group";
//import { Collapse } from 'reactstrap';
//import { MediaQuery } from 'react-responsive';

library.add(fab, fas, far);

const wrapperStyle = {
  backgroundColor: "#afeeee",
  //height: '750px',
}
const cardStyle = {
 height: '410px'
}

class App extends React.Component{
  onSwipeNope() {
    console.log("pushed NopeButton.");
  }
  onSwipeLeft(data) {
    console.log(data.name + " was Leftswiped.");
  }
  onSwipeRight(data){
    console.log(data.name + " was Rightswiped.");
  }
  renderCards() {
    var person = [
                {
                  id: 1,
                  name: "taro",
                  age: "22",
                  img: <img src = './taro.png' alt = 'taro' className = 'person-img'/> 
                },
                {
                  id: 2,
                  name: "hanako",
                  age: "21",
                  img: <img src = './hanako.png' alt = 'hanako' className = 'person-img'/>
                },
                {
                  id: 3,
                  name: "rina",
                  age: "23",
                  img: <img src = './rina.png' alt = 'rina' className = 'person-img'/>
                },
                {
                  id: 4,
                  name: "kenta",
                  age: "25",
                  img: <img src = './kenta.png' alt = 'kenta' className = 'person-img'/>
                }
              ];
    return person.map((d) => {
      return(
        <Card 
        key={d.id}
        onSwipeLeft={this.onSwipeLeft.bind(this)}
        onSwipeRight={this.onSwipeRight.bind(this)}
        data={d}
        style={cardStyle}>
          
          {d.img}
        <span className = 'font'>
        {d.name}, {d.age}
        </span>
        <div className = 'button-position'>
        <span>
          <button　className = 'detail-button' onClick = {() => {console.log('detail')}}>Open/Close</button>
        </span>
        </div>
        </Card>
        );
      });
    }

  render(){
    return (
    <div>
      <CardWrapper style={wrapperStyle}>
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
