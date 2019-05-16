import React from 'react';
import RepositoryRadioButton from './repository-radio-button.component';

class RepositoryButtonList extends React.Component{

  render(){
    return(
      <div className = "button_panel_area" id = "button_area">
        <ul className = "button_list">
          {this.props.repository.get('repository').map((item) => {
            return <RepositoryRadioButton {...this.props}
                      key = {item['full_name']}
                      fullName = {item['full_name']}/>
          })}
        </ul>
      </div>
    );
  }
}

export default RepositoryButtonList;
