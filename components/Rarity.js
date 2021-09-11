import Button from './Button';
import utilStyles from '../styles/Utils.module.scss';

function Rarity() {
  return (
    <div className={utilStyles.margin2TopBot}>
      <Button url="/rarity" buttonType="rarity">
        Meowarity
      </Button>
      <h3 className={utilStyles.headingXS + ' ' + utilStyles.marginNeg2Top}>
        *Read: Rarity
      </h3>
    </div>
  );
}

export default Rarity;
