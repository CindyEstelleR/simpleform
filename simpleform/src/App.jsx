import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showError, setShowError] = useState(false);
  const [formValid, setFormValid] = useState(true);

  return (
    <>
      <Header />
      <main>
        <form
          onSubmit={(event) => {
            event.event.preventDefault();
            // console.log(event.defaultPrevented);
            // console(event.preventDefault);

            if (password !== password2) {
              setShowError(true);
              alert("Mots de passe différents");
            } else if (password.length < 3) {
              setShowError(true);
              alert("mot de passe trop court");
            } else {
              setShowError(false);
              alert("formulaire envoyé");
            }

            // if (password.length > 3) {
            //   setShowError(false);
            //   alert("formulaire envoyé");
            // } else {
            //   setShowError(true);
            // }
          }}
        >
          <h3>Name</h3>
          <input
            value={name}
            type="text"
            placeholder="Jean Dupont"
            name="Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <h3>Email</h3>
          <input
            value={email}
            type="email"
            placeholder="jeandupont@lereacteur.io"
            name="email"
            onChange={(event) => {
              // console.log(event);
              setEmail(event.target.value);
              // console.log(event.target.value);
            }}
          />
          <h3>Password</h3>
          <input
            value={password}
            type="password"
            placeholder="LeReAcTeUr2024"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <h3>Confirm your Password</h3>
          <input
            value={password2}
            type="password"
            placeholder="LeReAcTeUr2024"
            name="password2"
            onChange={(event) => {
              setPassword2(event.target.value);
            }}
          />

          <input className="submitbutton" type="submit" value="Register" />

          {showError === true && (
            <p style={{ color: "orange" }}>
              Votre mot de passe doit faire plus de 3 caractères
            </p>
          )}

          {formValid === true && <p>result</p>}
        </form>
      </main>
      <Footer />
    </>
  );
}

export default App;
