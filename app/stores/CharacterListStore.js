import alt from '../alt';
import CharacterListActions from '../actions/CharacterListActions';

class CharacterListStore {
  constructor() {
    this.bindActions(CharacterListActions);
    this.characters = [];
  }

  onGetCharactersSuccess(data) {
    this.characters = data;
  }

  onGetCharactersFail(jqXhr) {
  	let errorMsg = jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText;
    toastr.error(errorMsg);
  }
}

export default alt.createStore(CharacterListStore);