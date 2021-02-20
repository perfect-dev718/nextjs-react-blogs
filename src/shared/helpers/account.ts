import { DslCart, DslUser } from '@generated/graphql';

export const completeLogin = (dispatch: any, user: DslUser = null, cart: DslCart = null) => {
  if (window && window.sessionStorage) {
    sessionStorage.setItem(
      'isLoggedIn',
      JSON.stringify({
        isLoggedIn: {
          user: {
            ...(user || {}),
          },
          cart: {
            ...(cart || {}),
          },
        },
      }),
    );
  }

  dispatch({ type: 'set-user', payload: user });
  dispatch({ type: 'set-cart', payload: cart });
};

export const clearLogin = (dispatch?: any) => {
  if (window && window.sessionStorage) {
    sessionStorage.removeItem('isLoggedIn');
  }

  if (dispatch) {
    dispatch({ type: 'set-user', payload: null });
    dispatch({ type: 'set-cart', payload: null });
  }
};
