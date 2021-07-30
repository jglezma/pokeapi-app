import { abilitiesState } from "../types/state/AbilitiesState";
enum AbilitiesActions {
    SET_ITEMS = 'SET_ITEMS',
  }
  
  type SetAbilitiesAction = {
    type: AbilitiesActions.SET_ITEMS;
    payload: {
      abilitiesReducer: abilitiesState;
    };
  };

  
  export type AbilitiesAction = SetAbilitiesAction;
  
  export default AbilitiesActions;
  