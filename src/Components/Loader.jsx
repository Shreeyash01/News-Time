import React from 'react';
import Spinner from "./Spinner.gif"

const Loader = () => {
  return (
    <div className='text-center my-3'>
      <img src={Spinner} alt="Spinner" ></img>
    </div>
  )

}

export default Loader