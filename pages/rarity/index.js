import EmptySearch from '../../components/EmptySearch';
import Searchbar from '../../components/Searchbar';
import SEO from '@bradgarropy/next-seo';

function Rarity() {
  return (
    <main>
      <SEO title="KucingPunk - Rarity Checker" />
      <Searchbar />
      <EmptySearch />
    </main>
  );
}

export default Rarity;
