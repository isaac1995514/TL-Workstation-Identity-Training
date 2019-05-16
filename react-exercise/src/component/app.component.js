import React from 'react';
import Repository from './repository/repository.component';
import Commit from './commit/commit.component';

function App(props){

    return(
      <React.Fragment>
        <Repository {...props}/>
        <Commit {...props}/>
      </React.Fragment>
    )
}

export default App;
