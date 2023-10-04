import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import ProductImageCarousel from './ProductImageCarousel';
import ProductInfo from './ProductInfo';
import ProductReview from './ProductReview';
import Loader from '../Loader'

function ProductDetails() {

  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();


  
  const callCartApi = async () => {
    
    try {
      const response = await fetch(`http://127.0.0.1:3000/api/v1/product/show/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
  
      if (response.ok) {
        const data = await response.json();
        setDetail(data.data);
        setIsLoading(true);
      } else {
        // Handle error if needed
      }
    } catch (err) {
      console.error(err);
      // Handle error if needed
    }
  };

  useEffect(() => {
    callCartApi();
  }, []);
  
  return (
    <div className="container-fluid pb-5">
      {isLoading ? (
        <>
          <div className="row px-xl-5">
            <div className="col-lg-3 mb-30">
              <ProductImageCarousel img={detail.image}/>
            </div>
            <div className="col-lg-9 h-auto mb-30">
              <ProductInfo info={detail}/>
            </div>
          </div>
          <div className="row px-xl-5">
            <div className="col">
              <ProductReview />
            </div>
          </div>
        </>
      ) : (
        <div style={{width:"100vw",display:"flex",justifyContent:"center"}}>
        <Loader/>
        </div>
        // <div>Loading...</div>
      )}
    </div>
  );
}

export default ProductDetails;
