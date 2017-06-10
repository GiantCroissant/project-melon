import OverviewSection from 'containers/OverviewSection';
import DetailSection from 'containers/DetailSection';
import AboutSection from 'containers/AboutSection';
// import LoginSection from '../containers/LoginSection';

const routeConfig = [
  {
    path: '/overviews',
    component: OverviewSection
  },
  {
      path: '/details/:id',
      component: DetailSection
  },
  {
    path: '/about',
    component: AboutSection
  }
]

export default routeConfig;
