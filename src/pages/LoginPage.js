import { useState } from "react";
import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
// import Logo from '../components/logo/user';
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';
import { useNavigate } from 'react-router-dom';
import GoogleButton from '../login/googleLogin';
import RadioGroup from './radio/RadioGroup';
import Radio from './radio/Radio'



// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const navigate = useNavigate();
  
  const mdUp = useResponsive('up', 'md');

  const handleOpenUser = () => {
    navigate("/dashboard/home");
  };
  const handleOpenAdmin = () => {
    navigate("/a_dashboard/a_home");
  };

  // 구글 로그인 관련 변수 선언
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [value, setValue] = useState("Student");

  return (
    <>
      <Helmet>
        <title> Login | TOMATO </title>
      </Helmet>

      <StyledRoot>
        {/* <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        /> */}

        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back :{')'}
            </Typography>
            <img src="../../assets/logo/mainLogo.png" alt="login" />
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Sign in to TOMATO
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Don’t have an account? {''}
              <Link variant="subtitle2">Get started</Link>
            </Typography>


            {/* Google 로그인 버튼 */}      
            <article>
              <header>
                <h3>구글 로그인 그룹화 테스트</h3> 
              </header>
              <fieldset>
                  {/* <GoogleButton />   */}
                  <>
                      {!isLogin
                          ? <GoogleButton setUserInfo={setUserInfo} setIsLogin={setIsLogin} />
                          : navigate("/dashboard/home")
                      }
                   </>
                  <RadioGroup value={value} onChange={setValue}>
                        <Radio value="Student">학생</Radio>
                        <Radio value="Professor">교수</Radio>
                    </RadioGroup>
                    <footer>{value}를 선택하셨습니다.</footer>
                </fieldset>
            </article>


            <Stack direction="row" spacing={2}>
              {/* <Button fullWidth size="large" color="inherit" variant="outlined" >
                <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
              </Button> */}

              <Button fullWidth size="large" color="inherit" variant="outlined" onClick={handleOpenUser}>
                사용자
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined" onClick={handleOpenAdmin}>
                관리자
              </Button>
            </Stack>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>

            <LoginForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}