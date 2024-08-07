import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, descrption} = this.props;
    return (      

        <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src="https://i.cbc.ca/1.7286085.1722954734!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/paris-olympics-canoe-sprint.jpg" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descrption}</p>
          <a href="/newsdetails" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}
