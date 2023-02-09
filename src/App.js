// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from 'axios';
// axios 모듈에서 axios 함수를 불러온다.
// axios를 쓰는 목적에 서버에 데이터를 요청할 때 비동기적으로 요청하려고

// ----------------------------------------------------------------------

export default function App() {
  // const selectAll=async ()=>{
  //   alert("selectAll!")
  //   axios.get('/login')
  // }

  return (
    <ThemeProvider>
    <div>
      {/* <h1>React-Express-MySQL 연결</h1> */}
      {/* <button onClick={selectAll}>모두 조회</button> */}
    </div>
      <ScrollToTop />
      <StyledChart />
      <Router />
    </ThemeProvider>
  );
}
