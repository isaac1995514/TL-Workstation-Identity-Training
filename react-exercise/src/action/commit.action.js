import {CommitActionType} from './action-type/commit.action-type';
import AppDispatcher from '../app.dispatcher';
import {SimpleAPI} from '../utils/simple-api.util';
import $ from 'jquery';

const radioUrl = 'https://api.github.com/repos/';

const CommitActions = {
  handleRadioBtnSelect: (url) => {
    AppDispatcher.dispatch({
      type: CommitActionType.RADIO_BTN_SELECTED,
      url: url
    })
  },

  handleCommitApiLoad: (url) => {

      let getCommits = new Promise((resolve, reject) => {
      let errorMsg = 'Error! Commits cannot be found';
      SimpleAPI.getData(url, errorMsg, resolve, reject);

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

      AppDispatcher.dispatch({
        type: CommitActionType.COMMIT_API_LOAD,
        data: commitList,
      })
    }).catch((errorMsg) => {
      alert(errorMsg);
    })





  }
}

export default CommitActions;
