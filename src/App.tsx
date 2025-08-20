import './App.css'
import { Route, Routes } from 'react-router-dom'
import MovieListPage from './pages/MovieListPage';
import MovieCreatePage from './pages/MovieCreatePage';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MovieListPage/>}/>
      <Route path='/add' element={<MovieCreatePage/>}/>
      <Route path='/detail/:movieTitle' element={<MovieDetailPage />} />
    </Routes>
  )
}

export default App;
