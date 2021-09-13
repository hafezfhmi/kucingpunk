import Button from './Button';
import utilStyles from '../styles/Utils.module.scss';

function Rarity({ url, desc1, desc2 }) {
  return (
    <div>
      <Button url={url} buttonType="bigLink">
        {desc1}
      </Button>
      <h3 className={utilStyles.headingXS + ' ' + utilStyles.marginNeg2Top}>
        *Read: {desc2}
      </h3>
    </div>
  );
}

export default Rarity;
