import Keycloak from "keycloak-js";
import * as config from "../keycloak.json";

const _kc = new Keycloak(config);

const initKeycloak = (onAuthenticatedCallback: () => void) => {
  _kc
    .init({ onLoad: "login-required", flow: "implicit", useNonce: true })
    .then((authenticated) => {
      console.log(authenticated);
      if (!authenticated) {
        console.log("user is not authenticated..!");
      }
      onAuthenticatedCallback();
    })
    .catch(console.error);
};

const login = _kc.login;

const logout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback: () => void) =>
  _kc.updateToken(5).then(successCallback).catch(login);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles: string[]) => {
  return roles.some((role: string) => _kc.hasRealmRole(role));
}

export {
  initKeycloak,
  login,
  logout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
};
