// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: '수강 과목',
    path: '/a_dashboard/a_home',
    icon: icon('ic_user'),
  },
  {
    title: '토큰 관리',
    path: '/a_dashboard/a_tokenmanage',
    icon: icon('ic_analytics'),
  },
  {
    title: '로그인 페이지',
    path: '/login',
    icon: icon(''),
  }
];

export default navConfig;