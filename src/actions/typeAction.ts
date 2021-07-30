import { typeState } from "../types/state/typeState";
enum TypeActions {
    SET_ITEMS = 'SET_ITEMS',
  }
  
  type SetTypeAction = {
    type: TypeActions.SET_ITEMS;
    payload: {
      typeReducer: typeState;
    };
  };

  
  export type TypeAction = SetTypeAction;
  
  export default TypeActions;
  