import React, { Component } from 'react'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import {getCharacter, getCharacterOnNav, getCharacterOnPage} from '../redux/actions/character'

class Home extends Component {
  componentDidMount(){
    this.props.dispatch(getCharacter())
  }
  goToPage = (page) => {
    this.props.history.push(`/?page=${page}`)
    this.props.dispatch(getCharacterOnPage(page))
  }
  render() {
    const {characterData, pageInfo} = this.props.character
    return (
      <Container className="mt-5">
        <Row>
          {characterData.map(item=> (
            <Col md={4} className="text-center">
              <Link to={`/detail/${item.id}`}>
                <img className="block m-3" src={item.image} alt="placeholder" />
              </Link>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center mt-5">
          <Pagination>
            <li className={`page-item${!pageInfo.prev && ' disabled'}`}>
            <button onClick={()=>this.props.dispatch(getCharacterOnNav(pageInfo.prev))} className="page-link">&laquo;</button>
            </li>
            {[...Array(pageInfo.pages)].map((item, index)=> 
              (index+1 <= 5 && (<li className="page-item">
                <button onClick={()=>this.goToPage(index+1)} className="page-link">{index+1}</button>
              </li>))
            )}
            <Pagination.Ellipsis disabled/>
            {[...Array(pageInfo.pages)].map((item, index)=> 
              (index+1 > pageInfo.pages-5 && (<li className="page-item">
              <button onClick={()=>this.goToPage(index+1)} className="page-link">{index+1}</button>
            </li>))
            )}
            <li className={`page-item${!pageInfo.next && ' disabled'}`}>
              <button onClick={()=>this.props.dispatch(getCharacterOnNav(pageInfo.next))} className="page-link">&raquo;</button>
            </li>
          </Pagination>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  character: state.character
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)