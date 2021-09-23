import PageTitle from '../components/section/PageTitle';
import FeatureRow from '../components/section/FeatureRow';
import About from '../components/section/About';
// eslint-disable-next-line
import styles from './Earphones.module.css';

function Earphones() {
  return (
    <main>
      <PageTitle title="earphones" />
      <FeatureRow />
      <About />
    </main>
  );
}

export default Earphones;
