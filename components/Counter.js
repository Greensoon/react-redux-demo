import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as CounterAction from '../actions/count'

const mapStateToProps = state => {
	console.log(state)
	return {
		counter : state.counter
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(CounterAction,dispatch)
}


class Counter extends Component{
	render (){
		const { counter, increment, decrement, incrementOdd, incrementAsync} = this.props
		return (
			<p>
				clicked {counter} times {' '}
				<button onClick={increment} >+</button> {' '}
				<button onClick={decrement} >-</button> {' '}
				<button onClick={incrementOdd} >+odd </button> {' '}
				<button onClick={() => incrementAsync()} >+async</button>
			</p>
		)
	}

}

 Counter.propTypes = {
		counter : PropTypes.number.isRequired,
		increment : PropTypes.func.isRequired,
		decrement : PropTypes.func.isRequired,
		incrementOdd : PropTypes.func.isRequired,
		incrementAsync : PropTypes.func.isRequired
	}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)