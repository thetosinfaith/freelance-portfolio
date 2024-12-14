import Navbar from '../../components/Navbar/Navbar';
import MainFooter from '../../components/MainFooter/MainFooter';
import './BooksCourses'; 

const BooksCourses = () => {


  return (
    <>
      <Navbar />
      <div className="selar-shop-container">
        <h1>Selar Shop</h1>
        <p>Explore products from the seller on Selar</p>

        <div className="selar-embed">
          <iframe
            src="https://selar.co/m/thetosinfaith"
            title="Selar Seller Page"
            width="100%"
            height="600px"
            style={{ border: 'none' }}
          />
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default BooksCourses;
