import auth0 from "auth0-js";

class Auth0 {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "jakeherp.eu.auth0.com",
      clientID: "wjIvAY5Qrj9luFducFbCvfseCz6daAty",
      redirectUri: "http://localhost:3000/callback",
      responseType: "token id_token",
      scope: "openid profile"
    });

    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          console.error(err);
          reject(err);
        }
      });
    });
  }

  setSession() {}

  login() {
    this.auth0.authorize();
  }
}

const auth0Client = new Auth0();

export default auth0Client;
