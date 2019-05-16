import {List, Map} from 'immutable';
import {ReduceStore} from 'flux/utils';
import AppDispatcher from './../app.dispatcher';
import RepositoryActions from './../action/repository.action';
import {RepositoryActionType} from './../action/action-type/repository.action-type';

class RepositoryStore extends ReduceStore{
  constructor(){
    super(AppDispatcher);
  }

  getInitialState(){
    return Map({
      inputValue: 'react',
      repository: List(),
    });
  }

  reduce(state, action){
    switch (action.type) {
      case RepositoryActionType.GO_BTN_CLICKED:
        // Don't Launch new event if there is no input
        if(action.inputValue !== ''){
          RepositoryActions.handleRepositoryAPILoad(state.get('inputValue'));
        }
        return state;

      case RepositoryActionType.INPUT_CHANGED:

        return state.set('inputValue', action.inputValue);

      case RepositoryActionType.REPOSITORY_API_LOADED:
        return state.set('repository', List(action.data));
      default:
        return state;
    }
  }
}

export default new RepositoryStore();
