import './App.css'
import { Route, Routes } from 'react-router-dom'
import MovieListPage from './pages/MovieListPage';
import MovieCreatePage from './pages/MovieCreatePage';
import MovieDetailPage from './pages/MovieDetailPage';
import useThemeClass from './common/hooks/useThemeClass';
import Layout from './features/layout/components/Layout';

function App() {
  useThemeClass();
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MovieListPage/>}/>
        <Route path='/add' element={<MovieCreatePage/>}/>
        <Route path='/detail/:movieTitle' element={<MovieDetailPage />} />
      </Routes>
    </Layout>
  )
}

export default App;
