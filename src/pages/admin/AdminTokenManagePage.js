import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';


export default function AdminHomePage() {
    const StyledContent = styled('div')(({ theme }) => ({
        maxWidth: 480,
        margin: 'auto',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: theme.spacing(12, 0),
      }));
      
    return (
      <>
        <Helmet>
          <title> AdminTokenManagePage</title>
        </Helmet>
  
        <Container>
          <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
            <Typography variant="h3" paragraph>
                    AdminTokenManagePage
            </Typography>
  
            
            <Button to="/" size="large" variant="contained" component={RouterLink}>
              Go to Home
            </Button>
          </StyledContent>
        </Container>
      </>
    );
  }