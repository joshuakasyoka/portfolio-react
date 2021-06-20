import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import Article from './components/Article/Article'
// import DesignPage from './components/DesignPage/DesignPage'
import WritingPage from './components/WritingPage/WritingPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            {/* <Route path='/design' component={DesignPage} /> */}
            <Route path='/writing' component={WritingPage} />
            <Route path="/writing/:id" render={(props) => (
                <Article {...props} isAuthed={true} />
            )}/>
        </Switch>
    </Router>
  );
}

export default App;