import React, { Component } from 'react'
import { connect } from 'react-redux'

import {getDetails, clearDetails} from '../redux/actions/character'

class Details extends Component {
  componentDidMount(){
    const {id} = this.props.match.params
    this.props.dispatch(getDetails(id))
  }
  goBack = ()=> {
    this.props.dispatch(clearDetails())
    this.props.history.goBack()
  }
  render() {
    const {detailsCharacter: char} = this.props.character
    if(char.name){
      return (
        <div>
          <img src={char.image} alt={char.name} />
          <div>
            <span>{char.name}</span>
          </div>
          <div>
            <button onClick={this.goBack} className="btn btn-primary">Back</button>
          </div>
        </div>
      )
    }else{
      return (
        <div className="vh-100 w-100 flex justify-content-center align-items-center">
          <span>Loading...</span>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  character: state.character
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)