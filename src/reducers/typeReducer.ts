import TypeActions, { TypeAction } from '../actions/typeAction';
import { typeStore } from '../store/typeStore';
import { typeState } from '../types/state/typeState';

/**
 * Alert state reducer.
 */
export function typeReducer(
  state: typeState = typeStore,
  action: TypeAction,
): typeState {
  switch (action.type) {
    case TypeActions.SET_ITEMS:
      return {
        ...action.payload.typeReducer
      };

    default:
      return state;
  }
}
