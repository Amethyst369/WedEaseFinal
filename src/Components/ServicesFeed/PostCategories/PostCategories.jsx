import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../Config/Config';
import './PostCategories.css';

const PostCategories = () => {
  const [categoryProducts, setCategoryProducts] = useState({});
  const Navigate = useNavigate();
  const [ postDetails, setPostDetails ] = useState([]);
  const [ ptrue ,setPtrue ] = useState(false);
  
  
  //...................................

    
 const [ sTitle , setSTitile] = useState('');
 const [ sProducts, setSProducts] = useState([]);
    
  
const [orderSet, setOrderSet] = useState(false);
 console.log(sTitle,sProducts)

   var ti = sTitle;
   var [pro] = sProducts;
   localStorage.setItem("title",JSON.stringify(ti));
   localStorage.setItem("sproduct",JSON.stringify(pro));




//....................................
  var value = postDetails;

 if (value){
localStorage.setItem("product",JSON.stringify(value));
}
 var txt = JSON.parse(localStorage.getItem('product'));
  {console.log(txt)}





  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data...');
      try {
        const data = await getDocs(collection(db, 'products'));
        const allProducts = data.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }));





        // Group products by categoryname
        const groupedProducts = allProducts.reduce((acc, product) => {
          if (!acc[product.categoryname]) {
            acc[product.categoryname] = [];
            console.log(product.imageurl)
          }
          acc[product.categoryname].push(product);
          return acc;
        }, {});

        setCategoryProducts(groupedProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once
 
  
  
  return (
    <div>
      {Object.entries(categoryProducts).map(([categoryName, products]) => (
        <div key={categoryName} className='div'>
<h2 className='title' onClick={() =>{
   
     
     setSTitile(categoryName)
     setSProducts(products)
     setOrderSet(true)
    if (orderSet){
       Navigate('/spost')
    }

}
  }
   
   
   
   >{categoryName}</h2>

          <div className='main'>
          
              <div className='gal'>
                {products.map(product => (
                        
                    

                  <div className='exxx' key={product.id} onClick={()=>{
                    setPostDetails(product)
                    setPtrue(true)
                    if(ptrue){
                      Navigate('/post')
                    }
                     
                  
                  }}>
                    <div className='profxx'>
                      
                      {/* <img src= 'src/Components/Post/Images/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg' /*{product.urlproduct} */ }
                      
                        {/* alt="" />  */}



                      <p>{product.name}</p>
                    </div>
                    <div className='detailx'>
                      <h5>{product.categoryname}</h5>
                      <h6>Price: {product.price}</h6>
                      <h6>posted on : <br />
                         {product.createdAt}</h6>
                      <h6>Location : <br />
                        {product.location}</h6>
                      {/* <ul>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                      </ul> */}
                    </div>
                    <div className='det'></div>
                    <img 
                    
                
                    src= {product.imageurl} 
                    
                    alt="error" className='mg' />
                  </div>
                ))}
              </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCategories;
