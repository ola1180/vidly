import React, { Component } from 'react'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Customers from './components/customers';
import Movies from './components/movies'
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Logout from './components/logout';
import auth from './services/authService'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import withRouter from './components/common/withRouter';

class App extends Component {

  state = {}

  componentDidMount() {
    const user = auth.getCurrentUser()

    this.setState({ user })


  }

  render() {
    const { user } = this.state

    return (
      <>
        <ToastContainer />
        <NavBar user={user} />
        <main className='container'>
          <Routes>
            <Route path='login' element={<LoginForm />}></Route>
            <Route path='logout' element={<Logout />}></Route>
            <Route path='movies/:id' element={user ? (<MovieForm />) : (<Navigate to='/login' replace state={{ from: this.props.location }} />)}></Route>
            <Route path='movies' element={<Movies user={user} />}></Route>
            <Route path='customers' element={<Customers />}></Route>
            <Route path='rentals' element={<Rentals />}></Route>
            <Route path='register' element={<RegisterForm />}></Route>
            <Route path='not-found' element={<NotFound />}></Route>
            <Route path='new' element={<MovieForm />}></Route>
            <Route path='/' element={<Navigate to='movies' replace />}></Route>
            <Route path='*' element={<Navigate to='not-found' />} />
          </Routes>
        </main >
      </>
    );
  }
}

export default withRouter(App);
