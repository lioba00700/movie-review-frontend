//2025.08.21 레이아웃 컴포넌트 추가 - 박민서
import "./App.css";
import { Route, Routes } from "react-router-dom";
import useThemeClass from "@/common/hooks/useThemeClass";
import Layout from "@/features/layout/components/Layout";
import useScrollTop from "@/common/hooks/useScrollTop";
import NotFoundPage from "./pages/NotFoundPage";
import {
  DirectorFormPage,
  MovieDetailPage,
  MovieFormPage,
  MovieListPage,
} from "@/pages/movie";
import { AdminLoginPage, AdminMoviePage } from "@/pages/admin";
import AdminGuard from "./common/components/AdminGuard";

function App() {
  useThemeClass();
  useScrollTop();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/detail/:movieId" element={<MovieDetailPage />} />

        {/*관리자*/}
        <Route path="/admin/login" element={<AdminLoginPage />} />

        <Route element={<AdminGuard />}>
          <Route path="/add/director" element={<DirectorFormPage />} />
          <Route path="/add" element={<MovieFormPage />} />
          <Route path="/edit/:movieId" element={<MovieFormPage />} />
          <Route path="/admin/movies" element={<AdminMoviePage />} />
        </Route>
        

        {/*404*/}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
