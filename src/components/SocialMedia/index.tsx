import InstagramIcon from 'assets/icons/instagram.svg';
import WhatsAppIcon from 'assets/icons/whatsapp.svg';

import './styles.css';

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <img src={InstagramIcon} alt="Instagram link" />
      <img src={WhatsAppIcon} alt="Whatsapp link" />
    </div>
  );
};

export default SocialMedia;
