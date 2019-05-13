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
        <RepositoryInput
          handleClick = {this.props.handleClick}
          handleInputChange = {this.handleInputChange}
          inputValue = {this.state.inputValue}/>
        <RepositoryButtonList
          repositoryList = {this.props.repositoryList}
          handleRadioBtnSelect = {this.props.handleRadioBtnSelect}/>
      </div>
    )
  }
}

export default Repository;
