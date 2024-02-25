import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from '../../img/1316873404_zdx_162_1920.jpg';
import Buttons from 'components/Button/Button';
import { Container, Text } from './Home.styled';

const Home = () => {
    const navigate = useNavigate();
    
    const handleExploreClick = () => {
        navigate('/catalog');
    }

return (
    <>
        <Container>
            <Text>Welcome to our Rental Car Company</Text>
            <img src={backgroundImg} alt="backgroundImg" />
        <Buttons onClick={handleExploreClick} text="All car" />
      </Container>
    </>
  );
}

export default Home;
