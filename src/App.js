import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ArticlePage from './pages/ArticlePage/ArticlePage'
// import DesignPage from './components/DesignPage/DesignPage'
import WritingPage from './pages/WritingPage/WritingPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
            {/* <Route path='/design' component={DesignPage} /> */}
            <Route exact path='/writing' component={WritingPage} />
            <Route path='/writing/:articleId' component={ArticlePage} /> 
        </Switch>
    </Router>
  );
}

export default App;