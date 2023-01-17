// @mui
import {
  Card,
  Stack,
  Container,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import './AttendPage.css';
import './Modal/AttendModal.css';

export default function GradePage() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    useEffect(() => {
        console.log("change");
    });
    return(
        <>
        <Container>

            <Typography variant="h4" gutterBottom>
                컴퓨터 네트워크 1분반
            </Typography>
        </Container>
        <div className='event-year'>
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
            </div>
            
        </>
        
    );
}