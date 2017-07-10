import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
	constructor() {
		this.bindActions(HomeActions);
		this.characters = [];
	}

	onGetTwoCharactersSuccess(data) {
		this.characters = data;
	}

	onGetTwoCharactersFail(errorMessage) {
  	let errorMsg = errorMessage.responseJSON && errorMessage.responseJSON.message || errorMessage.responseText || errorMessage.statusText;
		toastr.error(errorMsg);
	}

	onVoteFail(errorMessage) {
  	let errorMsg = errorMessage.responseJSON && errorMessage.responseJSON.message || errorMessage.responseText || errorMessage.statusText;
		toastr.error(errorMsg);
	}
}

export default alt.createStore(HomeStore);