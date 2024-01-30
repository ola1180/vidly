import './App.css';
import Customers from './components/customers';
import Movies from './components/movies'
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';





function App() {

  return (
    <>
      <NavBar />
      <main className='container'>

        <Routes>
          <Route path='movies/:id' element={<MovieForm />}></Route>
          <Route path='movies' element={<Movies />}></Route>
          <Route path='customers' element={<Customers />}></Route>
          <Route path='rentals' element={<Rentals />}></Route>
          <Route path='not-found' element={<NotFound />}></Route>
          <Route path='/' element={<Navigate to='movies' replace />}></Route>
          <Route path='*' element={<Navigate to='not-found' />} />


        </Routes>
      </main >
    </>
  );
}

export default App;
