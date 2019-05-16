import {RepositoryActionType} from './action-type/repository.action-type';
import AppDispatcher from '../app.dispatcher';
import {SimpleAPI} from '../utils/simple-api.util';
import $ from 'jquery';

const btnUrl = 'https://api.github.com/search/repositories'

const RepositoryActions = {

  handleGoBtnClick: (inputValue) => {
    AppDispatcher.dispatch({
      type: RepositoryActionType.GO_BTN_CLICKED
    });
  },
  handleInputChange: (e) => {
    AppDispatcher.dispatch({
      type:RepositoryActionType.INPUT_CHANGED,
      inputValue: e.target.value
    })
  },
  handleRepositoryAPILoad: (inputValue) => {

    let getRepositoryAsync = new Promise((resolve, reject) => {

      let fullUrl = `${btnUrl}?q=${inputValue}`;
      let errorMsg = 'Error! Repository could not be found';
      SimpleAPI.getData(fullUrl, errorMsg, resolve, reject);

    }).then((data) => {
      AppDispatcher.dispatch({
        status: 'success',
        type: RepositoryActionType.REPOSITORY_API_LOADED,
        data: data['items'],
        errorMsg: ''
      })
    }).catch((errorMsg) => {
      AppDispatcher.dispatch({
        status: 'failed',
        type: RepositoryActionType.REPOSITORY_API_LOADED,
        data: [],
        errorMsg: errorMsg
      })
    })
  }
};

export default RepositoryActions;
