import React from 'react';
import { DslCart, DslCategory, DslOutlet, DslUser, formatNavItems, NavItem } from 'shared';

interface AppContextState {
  currentUser: DslUser | null;
  cart: DslCart | null;
  outlet: DslOutlet | null;
  categories: DslCategory[];
  navigationItems: NavItem[];
  passwordToken: string;
}

export const initialState: AppContextState = {
  currentUser: null,
  cart: null,
  categories: [],
  navigationItems: [],
  outlet: null,
  passwordToken: '',
};

export enum ContextActions {
  SET_CART = 'set-cart',
  SET_USER = 'set-user',
  RESET = 'reset',
  SET_CATEGORIES = 'set-categories',
}

const reducer = (state: AppContextState, action: any) => {
  switch (action.type) {
    case ContextActions.RESET:
      return initialState;
    case ContextActions.SET_USER:
      return { ...state, currentUser: action.payload, fetchingUser: false };
    case ContextActions.SET_CART:
      return { ...state, cart: action.payload };
    case ContextActions.SET_CATEGORIES:
      return {
        ...state,
        navigationItems: formatNavItems(action.payload),
        categories: action.payload,
      };
    case 'set-password-token':
      return { ...state, passwordToken: action.payload };
    default:
      return state;
  }
};

export const AppContextComponent = React.createContext<{ state: AppContextState; dispatch?: any }>({
  state: initialState,
});

export const AppContext: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, { ...initialState });
  const value = { state, dispatch };

  return <AppContextComponent.Provider value={value}>{children}</AppContextComponent.Provider>;
};
