import Button from './Button';
import utilStyles from '../styles/Utils.module.scss';
import Fade from 'react-reveal/Fade';

function Rarity({ url, desc1, desc2 }) {
  return (
    <div>
      <Fade bottom>
        <Button url={url} buttonType="bigLink">
          {desc1}
        </Button>
        <h3 className={utilStyles.headingXS + ' ' + utilStyles.marginNeg2Top}>
          *Read: {desc2}
        </h3>
      </Fade>
    </div>
  );
}

export default Rarity;
