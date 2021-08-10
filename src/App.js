import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/">
            <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
