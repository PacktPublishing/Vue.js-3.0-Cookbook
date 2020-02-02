import { Auth } from 'aws-amplify';

export const singIn = async (username, password) => {
  try {
    return Auth.signIn({
      username,
      password,
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const singUp = async ({ username = '', password = '', email = '' }) => {
  try {
    return Auth.signUp({
      username,
      password: `${password}`,
      attributes: {
        email,
      },
      validationData: [],
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const validateUser = async (username = '', code = '') => {
  try {
    await Auth.confirmSignUp(username, `${code}`);

    return Promise.resolve(true);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const resendValidationCode = async (username = '') => {
  try {
    return Auth.resendSignUp(username);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const signOut = async () => {
  try {
    return Auth.signOut();
  } catch (err) {
    return Promise.reject(err);
  }
};

export const changePassword = async (username, oldPassword, newPassword) => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return Auth.changePassword(user, `${oldPassword}`, `${newPassword}`);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getCurrentAuthUser = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();

    return Promise.resolve({
      id: user.username,
      email: user.signInUserSession.idToken.payload.email,
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

export default {
  singIn,
  singUp,
  validateUser,
  resendValidationCode,
  signOut,
  changePassword,
  getCurrentAuthUser,
};
