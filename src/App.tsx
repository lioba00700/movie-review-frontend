//2025.08.21 레이아웃 컴포넌트 추가 - 박민서
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MovieListPage from '@/pages/movie/MovieListPage';
import MovieFormPage from '@/pages/movie/MovieFormPage';
import MovieDetailPage from '@/pages/movie/MovieDetailPage';
import useThemeClass from '@/common/hooks/useThemeClass';
import Layout from '@/features/layout/components/Layout';
import useScrollTop from '@/common/hooks/useScrollTop';

function App() {
  useThemeClass();
  useScrollTop();
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MovieListPage/>}/>
        <Route path='/add' element={<MovieFormPage/>}/>
        <Route path='/detail/:movieTitle' element={<MovieDetailPage />} />
        
        {/*관리자*/}
        <Route path='/admin/login' element={<MovieDetailPage />} />
        <Route path='/admin/signup' element={<MovieDetailPage />} />
        <Route path='/admin/movies' element={<MovieDetailPage />} />
        
        {/*404*/}
        <Route path='*' element={<MovieDetailPage />} />
      </Routes>
    </Layout>
  )
}

export default App;
