import PageTitle from '../components/section/PageTitle';
import FeatureRow from '../components/section/FeatureRow';
import About from '../components/section/About';
// eslint-disable-next-line
import styles from './Speakers.module.css';

function Speakers() {
  return (
    <main>
      <PageTitle title="speakers" />
      <FeatureRow />
      <About />
    </main>
  );
}

export default Speakers;
