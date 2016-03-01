import React, { Component } from 'react';
import { List } from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = new Map({'Trainspotting': 5, '28 Days Layer': 4});

export default class App extends React.Component {
  render() {
    return React.cloneElement(this.props.children, { pair, tally });
  }
}

