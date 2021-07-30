import AbilitiesActions, {AbilitiesAction} from '../actions/abilitiesAction';
import { abilitiesStore } from '../store/abilitiesStore';
import { abilitiesState } from '../types/state/AbilitiesState';

/**
 * Alert state reducer.
 */
export function AbilitiesReducer(
  state: abilitiesState = abilitiesStore,
  action: AbilitiesAction,
): abilitiesState {
  switch (action.type) {
    case AbilitiesActions.SET_ITEMS:
      return {
        ...action.payload.abilitiesReducer
      };

    default:
      return state;
  }
}
