import { Link } from 'react-router-dom';

import ButtonIcon from 'components/ButtonIcon';
import SocialMedia from 'components/SocialMedia';

import MainImage from 'assets/images/main-image.png';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>É aqui que você encontra seu novo veículo </h1>
            <p>
              A oportunidade para seu novo veículo se encontra aqui na Asa
              Branca Automóveis
            </p>
            <SocialMedia />
          </div>
          <div>
            <Link to="/products">
              <ButtonIcon text="Inicie agora a sua busca" />
            </Link>
          </div>
        </div>
        <div className="home-image-container">
          <img src={MainImage} alt="Home page" />
        </div>
      </div>
    </div>
  );
};

export default Home;
