import PageTitle from '../components/section/PageTitle';
import ProductCard from '../components/section/ProductCard';
import FeatureRow from '../components/section/FeatureRow';
import About from '../components/section/About';
import markTwoSpeakers from '../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import markOneSpeakers from '../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg';
import xx59Headphones from '../assets/product-xx59-headphones/desktop/image-product.jpg';

function Category() {
  const card1 = {
    reversed: false,
    image: markTwoSpeakers,
    alt: 'xx99 mark two headphones',
    new: true,
    title: 'xx99 mark ii headphones',
    text: `
    The new XX99 mark II headphones is the pinnacle of pristine audio. It
    redefines your premium headphone experience by reproducing the
    balanced depth and precision of studio-quality sound.`,
    href: '/xx99-markii-headphones',
  };

  const card2 = {
    reversed: true,
    image: markOneSpeakers,
    alt: 'xx99 mark one headphones',
    new: false,
    title: 'xx99 mark i headphones',
    text: `
    As the gold standard for headphones, the classic XX99 Mark I offers
    detailed and accurate audio reproduction for audiophiles, mixing
    engineers, and music aficionados alike in studios and on the go.`,
    href: '/xx99-marki-headphones',
  };

  const card3 = {
    reversed: false,
    image: xx59Headphones,
    alt: 'xx59 headphones',
    new: false,
    title: 'xx59 headphones',
    text: `
    Enjoy your audio almost anywhere and customize it to your specific
    tastes with the XX59 headphones. The stylish yet durable versatile
    wireless headset is a brilliant companion at home or on the move.`,
    href: '/xx59-headphones',
  };

  return (
    <main>
      <PageTitle title="headphones" />
      <ProductCard data={card1} />
      <ProductCard data={card2} />
      <ProductCard data={card3} />
      <FeatureRow />
      <About />
    </main>
  );
}

export default Category;
