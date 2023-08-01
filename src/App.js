import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';
import './App.css';

function App() {
  return (
    <div>
      <LikeButton />
      <ClickablePicture
        img='maxence.png'
        imgClicked='maxence-glasses.png'
      />
      <Dice />
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      <NumbersTable limit={12} />
      <FaceBook />
    </div>
  );
}

export default App;
