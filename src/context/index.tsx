'use client';
import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

import { Action, AppState } from '@/types';

const INITIAL_STATE: AppState = {
  pizzaSize: undefined,
  pizzaFlavor: undefined,
  pizzaAdditional: [],
  cart: [],
};

const AppContext = createContext({
  state: INITIAL_STATE,
  dispatch: (() => {}) as React.Dispatch<Action>,
});

export const useAppContext = () => useContext(AppContext);

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppContextProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const contextValue = {
    state,
    dispatch,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
