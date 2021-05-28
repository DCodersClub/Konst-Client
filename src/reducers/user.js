const initialState = {
  user: null,
  error: null,
  loading: false,
};

export const saveUser = (dispatch, user) =>
  dispatch({
    type: "@user/save",
    payload: {
      user,
      error: null,
      loading: false,
    },
  });

export const userError = (dispatch, error) =>
  dispatch({
    type: "@user/error",
    payload: {
      error: error,
      loading: false,
    },
  });

export const loadingUser = (dispatch, loading = true) =>
  dispatch({
    type: "@user/loading",
    payload: {
      loading,
    },
  });

const logoutUser = (dispatch) => dispatch({ type: "@user/logout", state: initialState });

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@user/save": {
      return { ...state, ...action.payload };
    }
    case "@user/error": {
      return { ...state, ...action.payload };
    }
    case "@user/loading": {
      return { ...state, ...action.payload };
    }
  }
  return state;
};

export default userReducer;
