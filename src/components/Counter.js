import React from 'react'
import './Counter.css'
import {connect} from 'react-redux'
import * as actions from '../actions'
// import { bindActionCreators } from 'redux'

const Counter =({counter,inc,dec,res}) => {
   return (
        <div className="container">
        <div className="counter_block">
        <h1 className="counter" >{counter}</h1>
         </div>
        <div className="container_bot">
        <button onClick={inc}  className="square_plus" ><div  className="inner" ><img src={"Vector.png"} alt='logo'/></div> </button>
        <button onClick={dec} className="square_minus" ><div  className="inner"><img src="Minus.png"  alt='logo1'/></div></button>
        <button onClick={res} className="reset" ><div  className="inner" ><img src="Vector_1.png"  alt='logo2'/><img  src="Vector_2.png"  alt='logo3'/></div></button>
      </div>
      </div>
    )
}
function mapStateToProps (state){
  return {
    counter:state
  }
}
// const mapDispathToProps =(dispatch) =>{
//  return bindActionCreators(actions,dispatch)
// }
export default connect(mapStateToProps,actions )(Counter )
