const isSignedIn = null;

const authReducer = (state = isSignedIn, action) => {
  switch (action.type) {
    case "signin":
      return true;
    case "signout":
      return false;
    default:
      break;
  }
  return state;
};

export default authReducer;
