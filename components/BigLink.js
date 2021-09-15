import Button from './Button';
import utilStyles from '../styles/Utils.module.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Rarity({ url, desc1, desc2 }) {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <Button url={url} buttonType="bigLink">
        {desc1}
      </Button>
      <h3
        className={utilStyles.headingXS + ' ' + utilStyles.marginNeg2Top}
        data-aos="fade-up"
      >
        *Read: {desc2}
      </h3>
    </div>
  );
}

export default Rarity;
