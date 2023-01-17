// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: '출석 데이터',
    path: '/dashboard/attendData',
    icon: icon('ic_user'),
  },
  {
    title: '성적 데이터',
    path: '/dashboard/gradeData',
    icon: icon('ic_analytics'),
  }
];

export default navConfig;