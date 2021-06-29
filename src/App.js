import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import Header from './components/header/Header';
import PageNotFound from './components/footer/PageNotFound';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';
function App() {
  return (
    <>
        <Router>
       <Header />
      <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/about" component={About} />
            <Route component={PageNotFound} />
          </Switch>
      </Container>
        </Router>
    </>
  );
}

export default App;
