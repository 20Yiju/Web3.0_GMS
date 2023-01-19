import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import AdminDashboardLayout from './layouts/AdminDashboard';

import SimpleLayout from './layouts/simple';
//
import HomePage from './pages/user/HomePage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import GradeDataPage from './pages/user/GradeDataPage';
import RankingPage from './pages/user/RankingPage';
import AttendDataPage from './pages/user/AttendDataPage';
import Profile from './pages/user/ProfilePage';
import AttendPage from './pages/user/AttendPage';
import GradePage from './pages/user/GradePage';
import AdminStudentListPage from './pages/admin/AdminStudentListPage';
import AdminHomePage from './pages/admin/AdminHomePage';
import AdminTokenManagePage from './pages/admin/AdminTokenManagePage';
import AdminTokenPage from './pages/admin/AdminTokenPage';



export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/home" />, index: true },
        { path: 'home', element: <HomePage /> },
        { path: 'ranking', element: <RankingPage /> },
        { path: 'profile', element: <Profile /> },
        { path: 'attendData', element: <AttendDataPage /> },
        { path: 'gradeData', element: <GradeDataPage /> },
        { path: 'attendance', element: <AttendPage /> },
        { path: 'grade', element: <GradePage /> },
      ],
    },
    {
      path: '/a_dashboard',
      element: <AdminDashboardLayout />,
      children: [
        { element: <Navigate to="/a_dashboard/a_home" />, index: true },
        { path: 'a_home', element: <AdminHomePage /> },
        { path: 'a_studentlist', element: <AdminStudentListPage /> },
        { path: 'a_tokenmanage', element: <AdminTokenManagePage /> },
        { path: 'a_tokenpublish', element: <AdminTokenPage /> },
      ]
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/home" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
