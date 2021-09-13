import utilStyles from '../styles/Utils.module.scss';
import BigLink from '../components/BigLink';

function AttributeRarity() {
  return (
    <div className={utilStyles.margin2TopBot}>
      <BigLink url={'/rarity'} desc1={'Meowarity'} desc2={'Rarity'} />
      <BigLink url={'/attribute'} desc1={'Meowattribute'} desc2={'Attribute'} />
    </div>
  );
}

export default AttributeRarity;
