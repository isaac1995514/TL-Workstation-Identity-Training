import React from 'react';

class RepositoryInput extends React.Component{

  render(){
    return (
      <div className = "button_panel_area" id = "input_area">
        <input
          id = 'text_value'
          type='text'
          value = {this.props.repository.get('inputValue')}
          onChange = {(e) => this.props.onInputChange(e)}/>
        <input
          id = 'go_button'
          type='button'
          value="Go!"
          onClick = {() => this.props.onGoButtonClick(this.props.repository.get('inputValue'))}/>
      </div>
    );
  }
}

export default RepositoryInput;
