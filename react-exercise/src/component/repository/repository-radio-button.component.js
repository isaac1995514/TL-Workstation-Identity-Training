import React from 'react';

const radioUrl = 'https://api.github.com/repos/';

class RepositoryRadioButton extends React.Component{

  render(){
    let url = `${radioUrl}${this.props.fullName}/commits`;
    return(
      <li>
        <input
          className = "repositoryButton"
          type = "radio"
          name = "repository"
          onClick = {() => this.props.onRadioBtnSelect(url)}/>
          {" " + this.props.fullName}
      </li>
    );
  }
}

export default RepositoryRadioButton;
