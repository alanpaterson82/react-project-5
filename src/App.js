import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/login" render={() => <h1>Login</h1>} />
          <Route exact path="/register" render={() => <SignUpForm />} />
          <Route render={() => <p>There's Nothing Here!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;