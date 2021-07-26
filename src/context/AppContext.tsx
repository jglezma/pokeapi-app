import React, { createContext, Dispatch, FC, useContext, useReducer } from 'react';

import { AppAction } from '../actions';
import { AppReducer } from '../reducers';
import { initialState } from '../store';
import { AppState as AppStateType } from '../types/state';

export type AppContextType = {
  state: AppStateType;
  dispatch: Dispatch<AppAction>;
};

const AppContext = createContext<AppContextType>({} as AppContextType);

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.log('AppContext is not implemented!');
  }

  return context;
}

export const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
