import React from 'react';
import '../App.css';
import { Card, CardWrapper} from 'react-swipeable-cards';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse } from 'react-collapse';
//import { CSSTransition } from "react-transition-group";

library.add(fab, fas, far);

class App extends React.Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.nopetoggle = this.nopetoggle.bind(this);
    this.state = { collapse: false , isOpened: this.props.isOpened, nope: false};
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  nopetoggle() {
    this.setState(state => ({ nope: !state.nope }));
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
    const superOnswipe = this.props.superOnswipe
    return person.map((d) => {
      return(
      /*<CSSTransition
      key={d.id}
      in ={this.state.nope}
      timeout={200}
      classNames = "my-card">
      
      <div className='card-container'>*/
          <Card
          key={d.id}
          superOnswipe={superOnswipe}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
          onSwipeRight={this.onSwipeRight.bind(this)}
          data={d}>
          {d.img}
          <div className = 'font'>
            {d.name}, {d.age}
          </div>
          <label　className = 'detail' onClick = {() => {this.toggle()}}>&nbsp;</label>
          <Collapse isOpened={this.state.collapse}>
            {d.detail}
            </Collapse>
          </Card>
          /*</div>
          </CSSTransition>*/
  
        );
      });
    }

  render(){
    return (
    <div>
      <CardWrapper>
      {this.renderCards()}
      </CardWrapper>
      <div className = 'btn-position'>
        <button onClick = {() => {this.nopetoggle()}} className ='btn nope'>
          <FontAwesomeIcon color='#dc143c' size ='lg' icon={['fas', 'times']} />
        </button>
        <button onClick = {() => {console.log('Like')}} className ='btn'>
          <FontAwesomeIcon  color='#3cb371' size ='lg' icon={['fas', 'heart']} />
        </button>
      </div>   
    </div>
    );
  }
}

export default App;
