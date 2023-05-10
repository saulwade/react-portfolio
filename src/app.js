import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Navigation from './components/navigation';
import AboutMe from './components/aboutme';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';

function App() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Navigation />
          <main>
            <Switch>
              <Route exact path="/" component={aboutme} />
              <Route path="/portfolio" component={portfolio} />
              <Route path="/contact" component={contact} />
              <Route path="/resume" component={resume} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;