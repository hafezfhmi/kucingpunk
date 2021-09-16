import utilStyles from '../styles/Utils.module.scss';
import BigLink from '../components/BigLink';

function AttributeRarity() {
  return (
    <section className={utilStyles.marginMedTopBot}>
      <BigLink url={'/rarity'} desc1={'Meowarity'} desc2={'Rarity'} />
      <BigLink url={'/attribute'} desc1={'Meowattribute'} desc2={'Attribute'} />
    </section>
  );
}

export default AttributeRarity;
