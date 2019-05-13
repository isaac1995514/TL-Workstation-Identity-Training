import React from 'react';
import Repository from './repository/repository.component';
import Commit from './commit/commit.component';
import $ from 'jquery';

const btnUrl = 'https://api.github.com/search/repositories'
const code = {
  200: 'success'
}

class App extends React.Component{
  state = {
    repositoryList: [],
    commitList: []
  }

  getData = (url, errorMsg, resolve, reject) => {
    (function(){
      $.get(url, (data, status) => {
        status === code['200'] ?
         resolve(data) :
         reject(`ErrorMsg: ${errorMsg}, Status: ${status}`);
      });
    })();
  }

  // Handle click of the click button
  handleClick = (inputValue) => {
    // Start Async to obtain list of repository
    let getRepositoryAsync = new Promise((resolve, reject) => {

      let fullUrl = `${btnUrl}?q=${inputValue}`;
      let errorMsg = 'Error! Repository could not be found';

      this.getData(fullUrl, errorMsg, resolve, reject);

    }).then((data) => {
      this.setState({
        repositoryList: data['items']
      })
    }).catch((errorMsg) => {
        alert(errorMsg);
    })
  }

  handleRadioBtnSelect = (url) => {

    let getCommits = new Promise((resolve, reject) => {
      let errorMsg = 'Error! Commits cannot be found';
      this.getData(url, errorMsg, resolve, reject);

    }).then((data) => {

      let commitList = [];

      for(let commit of data){
        commitList.push({
          name: commit['commit']['author']['name'],
          email: commit['commit']['author']['email'],
          date: commit['commit']['author']['date'],
          message: commit['commit']['message']
        });
      }
      this.setState({
        commitList: commitList
      })
    }).catch((errorMsg) => {
      alert(errorMsg);
    })
  }

  render(){
    return(
      <React.Fragment>
        <Repository
          repositoryList = {this.state.repositoryList}
          handleClick = {this.handleClick}
          handleRadioBtnSelect = {this.handleRadioBtnSelect}/>
        <Commit commitList = {this.state.commitList}/>
      </React.Fragment>
    )
  }
}

export default App;
