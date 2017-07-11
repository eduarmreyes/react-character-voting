import alt from '../alt';
import { assign } from 'underscore';

class NavbarActions {
	constructor() {
		this.generateActions(
			'updateOnlineUsers',
			'updateAjaxAnimation',
			'updateSearchQuery',
			'getCharacterCountSuccess',
			'getCharacterCountFail',
			'findCharacterSuccess',
			'findCharacterFail',
		);
	}

	findCharacter(payload) {
		$.ajax({
			url: '/api/characters/search',
			data: { name: payload.searchQuery }
		})
		.done((data) => {
			assign(payload, data);
			this.actions.findCharacterSuccess(payload);
		})
		.fail((jqXhr) => {
			this.actions.getCharacterCountFail(jqXhr);
		});
	}

	getCharacterCount() {
		$.ajax({ url: '/api/count' })
		.done((data) => {
			this.actions.getCharacterCountSuccess(data);
		})
		.fail((jqXhr) => {
			this.actions.getCharacterCountFail(jqXhr);
		});
	}
}

export default alt.createActions(NavbarActions);