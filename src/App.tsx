import './App.css'
import { Route, Routes } from 'react-router-dom'
import MovieListPage from './pages/MovieListPage';
import AddMoviePage from './pages/MovieCreatePage';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MovieListPage/>}/>
      <Route path={'/add'} element={<AddMoviePage/>}/>
    </Routes>
  )
}

export default App;
