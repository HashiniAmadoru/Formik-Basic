import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import YoutubeForm from "./components/YoutubeForm";
import FormikContainer from "./components/FormikContainer";
import Login from "./components/Login/Login"


function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navbar />
            <Route exact path="/">
              <YoutubeForm />
            </Route>
            <Route path="/formcontrol">
              <FormikContainer />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
