const initialState = {
  user: null,
  error: null,
  loading: false,
};

const type = {
  saveUser: "@user/SAVE_USER_DATA",
  fetchUser: "@user/FETCH_USER_DATA",
  removeUser: "@user/REMOVE_USER_DATA",
};

const immutePayload = (state, { payload }) => {
  return { ...state, ...payload };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.saveUser:
    case type.fetchUser: {
      return immutePayload(state, action);
    }
    case type.removeUser: {
      return initialState;
    }
  }
  return state;
};

export const user = {
  /**
   * Save User Data Into Store Usse Error Parameter To Set If Any Error Occoured
   *
   * Can be used to save error if not defined just pass undefined in fist param, and error in second param
   * @param {Object} user UserData
   * @param {Object} err Error
   * @returns {Object} dispath data
   */
  saveData(user, err) {
    return {
      type: type.saveUser,
      payload: { user: user || null, error: err || null, loading: false },
    };
  },

  fetchingData() {
    return { type: type.fetchUser, payload: { user: null, error: null, loading: true } };
  },

  removeUser() {
    return { type: type.removeUser };
  },
};

export default userReducer;
