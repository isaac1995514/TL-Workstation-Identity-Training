import React from 'react';

class CommitEntry extends React.Component{

  render(){
    return(
      <tr>
        <td>{this.props.commit.name}</td>
        <td>{this.props.commit.email}</td>
        <td>{this.props.commit.date}</td>
        <td>{this.props.commit.message}</td>
      </tr>
    );
  }
}

export default CommitEntry;
