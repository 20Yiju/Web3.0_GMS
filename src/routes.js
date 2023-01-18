import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import AdminDashboardLayout from './layouts/dashboard';

import SimpleLayout from './layouts/simple';
//
import HomePage from './pages/user/HomePage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import GradeDataPage from './pages/user/GradeDataPage';
import RankingPage from './pages/user/RankingPage';
import AttendDataPage from './pages/user/AttendDataPage';
import Profile from './pages/user/Profile';
import AttendPage from './pages/user/AttendPage';
import GradePage from './pages/user/GradePage';
import StudentListPage from './pages/admin/StudentListPage';



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
        { path: 'a_studentlist', element: <StudentListPage /> }
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
