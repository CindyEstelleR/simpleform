import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <form action="">
          <h3>Name</h3>
          <input type="text" placeholder="Jean Dupont" name="Name" />
          <h3>Email</h3>
          <input
            type="email"
            placeholder="jeandupont@lereacteur.io"
            name="email"
          />
          <h3>Password</h3>
          <input type="password" placeholder="LeReAcTeUr2024" name="password" />
          <h3>Confirm your Password</h3>
          <input type="password" placeholder="LeReAcTeUr2024" name="password" />
          <input className="submitbutton" type="submit" value="Register" />
        </form>
      </main>
      <Footer />
      {/* <footer>
        <p>
          Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Cindy</span>
        </p>
      </footer> */}
    </>
  );
}

export default App;
