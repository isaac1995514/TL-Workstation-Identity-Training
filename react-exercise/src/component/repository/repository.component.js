import React from 'react';
import RepositoryInput from './repository-input.component';
import RepositoryButtonList from './repository-button-list.component';

class Repository extends React.Component{
  state = {
    inputValue : "react"
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  render(){
    return(
      <div className = "column" id = "button_panel">
        <RepositoryInput {...this.props}/>
        <RepositoryButtonList {...this.props}/>
      </div>
    )
  }
}

export default Repository;
