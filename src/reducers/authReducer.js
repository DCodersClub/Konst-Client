const isSignedIn = null;

const authReducer = (state = isSignedIn, action) => {
  switch (action.type) {
    case "@auth/SIGN_IN":
      return true;
    case "@auth/SIGN_OUT":
      return false;
    default:
      break;
  }
  return state;
};

export const auth = {
  signedIn() {
    return { type: "@auth/SIGN_IN" };
  },
  signedOut() {
    return { type: "@auth/SIGN_OUT" };
  },
};

export default authReducer;
