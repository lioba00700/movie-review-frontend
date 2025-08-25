//2025.08.21 레이아웃 컴포넌트 추가 - 박민서
import './App.css'
import { Route, Routes } from 'react-router-dom'
import useThemeClass from '@/common/hooks/useThemeClass';
import Layout from '@/features/layout/components/Layout';
import useScrollTop from '@/common/hooks/useScrollTop';
import NotFoundPage from './pages/NotFoundPage';
import { DirectorFormPage, MovieDetailPage, MovieFormPage, MovieListPage } from '@/pages/movie'
import { AdminLoginPage, AdminSignupPage, AdminMoviePage } from '@/pages/admin';

function App() {
  useThemeClass();
  useScrollTop();
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MovieListPage/>}/>
        <Route path='/add' element={<MovieFormPage/>}/>
        <Route path='/add/director' element={<DirectorFormPage />} />
        <Route path='/edit/:movieId' element={<MovieFormPage/>}/>
        <Route path='/detail/:movieId' element={<MovieDetailPage />} />
        
        {/*관리자*/}
        <Route path='/admin/login' element={<AdminLoginPage />} />
        <Route path='/admin/signup' element={<AdminSignupPage />} />
        <Route path='/admin/movies' element={<AdminMoviePage />} />
        
        {/*404*/}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export default App;
