import '../css/common.css';
import farmer from '../images/farmer-field.jpeg'
export default function MainPlantify(){
return(
 <div className="container common-home">
   <div className='back-image-box'>
    <img src={farmer} className='back-image' />
    <div className='back-image-content'>
        <h1>Plant Disease Prediction App</h1>
        <p >Your beautiful navbar is ready! Perfect for plant disease detection.</p>  
    </div>
    </div> 
 </div>
)
}