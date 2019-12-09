import React, {Component} from "react"

class Film extends Component {

  render(){
    return (
      <li className="Film">
      <a href={this.props.children}>
      {this.props.name}</a>
      </li>
    )
  }

}

export default Film
