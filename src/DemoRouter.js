import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CrudDemo from './CrudDemo';
import PersonDetails from './PersonDetails';

const DemoRouter = () => {
    return (
        <div className='container'>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/home' component={Home} />
                    <Route path='/person' component={Person} />
                    <Route path='/about' component={About} />
                    <Route path='/crud' component={CrudDemo} />
                    <Route path='/details/:id'>
                        <PersonDetails />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
};

const Header = () => {
    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
            <div className='container-fluid'>
                <ul className='navbar-nav me-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/'>Welcome</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/home'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/person'>Person</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/about'>About Us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/crud'>CRUD</Link>
                    </li>
                </ul>
                <form>
                    <Link className='btn btn-primary' to='/person'>Sign Up</Link>
                </form>
            </div>
        </nav>
    );
}

const Welcome = () => {
    return (
        <div className='container'>
            <h4>Welcome Page</h4>
        </div>
    );
}
const Home = () => {
    return (
        <div className='container'>
            <h4>Home Page</h4>
        </div>
    );
}
const Person = () => {
    return (
        <div className='container'>
            <h4>Person Data Page</h4>
        </div>
    );
}
const About = () => {
    return (
        <div className='container'>
            <h4>About Us Page</h4>
        </div>
    );
}
const NotFound = () => {
    return (
        <div className='container'>
            <h4>Page Not Found</h4>
        </div>
    );
}

export default DemoRouter;