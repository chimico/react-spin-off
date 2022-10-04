import { Component } from 'react';
import { redirect } from 'react-router-dom';

class Main extends Component {
  render() {
    return redirect('/home');
  }
}

export default Main;
