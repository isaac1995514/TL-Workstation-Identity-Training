import App from './component/app.component';
import {Container} from 'flux/utils';
import RepositoryActions from './action/repository.action';
import RepositoryStore from './store/repository.store';
import CommitActions from './action/commit.action';
import CommitStore from './store/commit.store';

function getStores(){
  return [
    RepositoryStore,
    CommitStore
  ];
}

function getState(){
    return {
        repository: RepositoryStore.getState(),
        commit: CommitStore.getState(),

        onGoButtonClick: RepositoryActions.handleGoBtnClick,
        onInputChange: RepositoryActions.handleInputChange,
        onRadioBtnSelect: CommitActions.handleRadioBtnSelect,
    };
}

export default Container.createFunctional(App, getStores, getState);
