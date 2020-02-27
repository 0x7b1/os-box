import React from "react";
import { render } from "react-dom";
import RedBox from "redbox-react";

import App from "./app";
import "./index.css";

import Firebase from "firebase";
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBVnVgl3YWw6ppY3T-lfRFnHTAkCT8eHto",
  authDomain: "osbs-dd402.firebaseapp.com",
  databaseURL: "https://osbs-dd402.firebaseio.com",
  projectId: "osbs-dd402",
  storageBucket: "osbs-dd402.appspot.com",
  messagingSenderId: "554496942106",
  appId: "1:554496942106:web:9a7666442d7c0613b0f1a3",
  measurementId: "G-QCDR5Q85CH"
};

Firebase.initializeApp(firebaseConfig);

let db = Firebase.firestore();

/* db.collection("collection-name")
  .doc("document-name")
  .set({
    property: "",
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
*/

const appEl = document.querySelector(".app-root");
const rootEl = document.createElement("div");

let renderApp = () => {
  render(<App />, rootEl);
};

/* Hot Replacement support, won't be bundled to production */
/* eslint-disable modules/no-exports-typo */
if (module.hot) {
  const renderAppHot = renderApp;
  const renderError = error => {
    render(<RedBox error={error} />, rootEl);
  };

  renderApp = () => {
    try {
      renderAppHot();
    } catch (error) {
      renderError(error);
    }
  };

  module.hot.accept("./app", () => {
    setTimeout(renderApp);
  });
}

renderApp();
appEl.appendChild(rootEl);
