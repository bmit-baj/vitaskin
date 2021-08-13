// Import der benötigten React-Components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Import der benötigten Components
import { Sidebar } from './components';
// Import der benötigten Pages
import { Dashboard } from './pages';


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
