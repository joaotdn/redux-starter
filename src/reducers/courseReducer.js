/**
 * Funções que aceitam um state e um action
 * e retorna um novo state (devem ser puramente para isso, evitar
 * efeitos colaterais em reducers)
 * */
import * as types from '../actions/actionsTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state,
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
