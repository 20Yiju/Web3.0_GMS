// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from 'axios';

// ----------------------------------------------------------------------

export default function App() {
  // const selectAll=async ()=>{
  //   alert("selectAll!")
  //   axios.get('/login')
  // }

  return (
    <ThemeProvider>
      <ScrollToTop />
      <StyledChart />
      <Router />
    </ThemeProvider>
  );
}
