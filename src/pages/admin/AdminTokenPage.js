// @mui
import {
    Card,
    Stack,
    Container,
    Typography,
    Button,
  } from '@mui/material';

  import { Helmet } from 'react-helmet-async';
  import { useEffect, useState } from 'react';
  import '../user/AttendPage.css';
  import '../Modal/AttendModal.css';
  import { useNavigate } from 'react-router-dom';
// import Button from '@mui/material';
  
  export default function GradePage() {
      const navigate = useNavigate();
      
      const [modal, setModal] = useState(false);
  
      const toggleModal = () => {
          setModal(!modal)
      }
      const goStudentList = () => {
        navigate("/a_dashboard/a_studentlist");
    }

      useEffect(() => {
          console.log("change");
      });
      return(
          <>
          <div>
            <Helmet>
                <title> Admin Home </title>
            </Helmet>

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        컴퓨터 네트워크 1분반 김한동 토큰 정보
                    </Typography>
                    <Button variant="outlined" onClick={goStudentList}> 
                        뒤로가기
                    </Button>
                </Stack>
            </Container>
          </div>

          <div className='event-year'>
          
          <Stack direction="row" alignItems="center" spacing={2}>
            <div className='attendance_token'>
            <Card>
                출석토큰
              <Stack direction="row" alignItems="center" spacing={2}>
                
                  <div className='events-logos'>
                          <a className="event-circle aos-init aos-animate" data-aos="fade-up" onClick={toggleModal}>
                          {modal && (
                              <div className="modal">
                              <div className="overlay"/>
                              <div className="modal-content">
                                  <h2>Homework1</h2>
                                  <p>점수: 80/100</p>
                                  <p>참잘했어요!</p>
                              </div>
                              <button className="close-modal"
                              onClick={toggleModal}>Close
                              </button>
                          </div>
                          )}
                              <img src="https://assets.poap.xyz/poap-1000-de-julin-2023-logo-1672770764046.png" alt="POAP 1000 DE JULIN"/>
                          </a>
                      </div>
                      <div className='events-logos'>
                          <a className="event-circle aos-init aos-animate" data-aos="fade-up" onClick={toggleModal}>
                              <img src="https://assets.poap.xyz/ethrank-season-three-2023-logo-1672072413312.png" alt="ETHRank Season Three"/>
                          
                              {modal && (
                                  <div className="modal">
                                  <div className="overlay"/>
                                  <div className="modal-content">
                                      <h2>Homework1</h2>
                                      <p>점수: 80/100</p>
                                      <p>참잘했어요!</p>
                                  </div>
                                  <button className="close-modal"
                                  onClick={toggleModal}>Close
                                  </button>
                              </div>
                              )}  
                          </a>
                              
  
                      </div>
                  </Stack>
                  </Card>
                  </div>
            <div className='grade_token'>
            <Card>
                성적토큰
              <Stack direction="row" alignItems="center" spacing={2}>
                
                  <div className='events-logos'>
                          <a className="event-circle aos-init aos-animate" data-aos="fade-up" onClick={toggleModal}>
                          {modal && (
                              <div className="modal">
                              <div className="overlay"/>
                              <div className="modal-content">
                                  <h2>Homework1</h2>
                                  <p>점수: 80/100</p>
                                  <p>참잘했어요!</p>
                              </div>
                              <button className="close-modal"
                              onClick={toggleModal}>Close
                              </button>
                          </div>
                          )}
                              <img src="https://assets.poap.xyz/poap-1000-de-julin-2023-logo-1672770764046.png" alt="POAP 1000 DE JULIN"/>
                          </a>
                      </div>
                      <div className='events-logos'>
                          <a className="event-circle aos-init aos-animate" data-aos="fade-up" onClick={toggleModal}>
                              <img src="https://assets.poap.xyz/ethrank-season-three-2023-logo-1672072413312.png" alt="ETHRank Season Three"/>
                          
                              {modal && (
                                  <div className="modal">
                                  <div className="overlay"/>
                                  <div className="modal-content">
                                      <h2>Homework1</h2>
                                      <p>점수: 80/100</p>
                                      <p>참잘했어요!</p>
                                  </div>
                                  <button className="close-modal"
                                  onClick={toggleModal}>Close
                                  </button>
                              </div>
                              )}  
                          </a>
                              
  
                      </div>
                  </Stack>
            </Card>
            </div>
            </Stack>
              </div>
              
          </>
          
      );
  }