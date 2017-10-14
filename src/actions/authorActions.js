import AuhtorApi from '../api/mockAuthorApi';
import * as types from './actionsTypes';

export function loadAuthorSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    // retorna uma promise
    return AuhtorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorSuccess(authors));
    })
      .catch(error => {
        throw (error);
      });
  };
}
