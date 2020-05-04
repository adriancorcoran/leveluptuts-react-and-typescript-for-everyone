import React, { Component } from "react";

type Props = {
  title: string;
};

type State = {
  status: string;
};

export default class BigC extends Component<Props, State> {
  render() {
    return (
      <div>
        <h1>I'm in a class component</h1>
      </div>
    );
  }
}
