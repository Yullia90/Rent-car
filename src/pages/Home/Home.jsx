import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from '../../img/Home.png';
import Buttons from 'components/Button/Button';
import { Container } from './Home.styled';

const Home = () => {
    const navigate = useNavigate();
    
    const handleExploreClick = () => {
        navigate('/catalog');
    }

return (
    <>
      <Container>
            <img src={backgroundImg} alt="backgroundImg" />
             <div>
      <h1>Welcome to our Rental Car Company</h1>
      <p>
        We offer a wide range of high-quality rental cars to suit your needs. Whether you're
        looking for a compact car for a quick trip or a spacious SUV for a family vacation,
        we've got you covered.
      </p>
      <p>
        Our fleet is regularly maintained and serviced to ensure a smooth and comfortable
        driving experience. We also provide flexible rental options, competitive prices, and
        excellent customer service.
      </p>
      <p>
        Explore our website to find the perfect car for your next adventure. Book online or
        contact our friendly team for assistance. We look forward to serving you!
      </p>
    </div>
        <Buttons onClick={handleExploreClick} text="All car" />
      </Container>
    </>
  );
}

export default Home;
