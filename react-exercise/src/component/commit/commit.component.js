import React from 'react';
import CommitEntry from './commit-entry.component';

class Commit extends React.Component{

  render(){
    return(
      <div className = "column" id = "table_panel">
        <table id = "commit_table">
            <thead>
                    <tr>
                        <th>Author</th><th>Email</th><th>Date</th><th>Message</th>
                    </tr>
            </thead>
            <tbody id = "content_body">
              {
                this.props.commitList.map((commit) => {
                  return <CommitEntry commit = {commit}/>
                })
              }
            </tbody>
        </table>
      </div>
    )
  }
}

export default Commit;
