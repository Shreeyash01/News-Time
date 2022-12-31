import React, { Component } from 'react';
import Spinner from "./Spinner.gif"

export class Loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Spinner} alt="Spinner" ></img>
      </div>
    )
  }
}

export default Loader