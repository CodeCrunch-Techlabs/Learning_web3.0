import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
/*import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/contact';
import Navbar from './component/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'React CRUD application',
      act: 0,
      index: '',
      datas: []
    }
  }
  componentDidMount() {
    this.refs.name.focus();
  }

  fsubmit = (e) => {

    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    if (this.state.act === 0) {
      let data = {
        name, address
      }
      datas.push(data);


    } else {

      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
    }

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myform.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas
    });

    this.refs.myform.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();

  }
  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="form" className="form">
          <input type="text" ref="name" placeholder="enter your name" className="formfield" />
          <input type="text" ref="address" placeholder="enter your address" className="formfield" />
          <button onClick={(e) => this.fsubmit(e)} className="Button">Submit </button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="mylist">
              {i + 1}. {data.name}, {data.address}
              <button onClick={() => this.fRemove(i)} className="dataButton">  remove</button>
              <button onClick={() => this.fEdit(i)} className="dataButton">  edit</button>
            </li>
          )}
        </pre>

      </div>
    );
  }
}
export default App;
