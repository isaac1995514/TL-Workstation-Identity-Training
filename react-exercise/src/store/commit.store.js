import {List, Map} from 'immutable';
import {ReduceStore} from 'flux/utils';
import AppDispatcher from './../app.dispatcher';
import CommitActions from './../action/commit.action';
import {CommitActionType} from './../action/action-type/commit.action-type';

class CommitStore extends ReduceStore{
  constructor(){
    super(AppDispatcher);
  }

  getInitialState(){
    return List();
  }

  reduce(state, action){
    switch (action.type) {
      case CommitActionType.RADIO_BTN_SELECTED:

        // Triger Rest API call
        CommitActions.handleCommitApiLoad(action.url);

        return state;


      case CommitActionType.COMMIT_API_LOAD:

        return List(action.data);
      
      default:
        return state;
    }
  }
}

export default new CommitStore();
