import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }

  increaseCount(e) {
    e.preventDefault();
    // state의 count를 1 증가시킨다
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  decreaseCount(e) {
    e.preventDefault();
    // state의 count를 1 감소시킨다
    this.setState((state) => {
      if (state.count >= 1) {
        return {
          count: state.count - 1,
        };
      }
    });
  }

  componentDidMount() {
    console.log('componentDidMount 실행됨');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate 실행됨');
    // this.setState((state) => ({
    //   count: state.count + 1,
    // }));
  }

  componentWillUnmount() {
    console.log('componentWillUnmount 실행됨');
  }

  render() {
    let { count } = this.state;
    let { increaseCount, decreaseCount } = this;
    return (
      <div>
        <div id="counter">count: {count}</div>
        <div id="buttons">
          <button id="increase" onClick={increaseCount}>
            increase
          </button>
          <button id="decrease" onClick={decreaseCount}>
            decrease
          </button>
        </div>
      </div>
    );
  }
}
