import "./App.css";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
