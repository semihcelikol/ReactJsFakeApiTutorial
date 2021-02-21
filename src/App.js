import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFoundPage from './pages/notFoundPage';
import Navbar from './layout/navbar';
import HomePage from './pages/homePage';
import Footer from './layout/footer';
import Todos from './component/todos';
import Posts from './component/posts';
import PostsDetails from './component/postsDetails';
import TodosDetails from './component/todosDetails';


function App() {
  return (

    <Router>
    <div className="App">

      <Navbar title="FakeAPI Tutorial"></Navbar>

          <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            
            <Route exact path="/todos" component={Todos} />
            <Route exact path="/todos/:id" component={TodosDetails} />

            <Route exact path="/posts" component={Posts} />
            <Route exact path="/posts/:id" component={PostsDetails} />

            <Route component={NotFoundPage} />
          </Switch>
          </div>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
