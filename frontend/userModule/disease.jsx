import { useState } from 'react';
import axios from 'axios';
import "../css/disease.css";
function Disease() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imgData, setImgData ] = useState(null);
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };


  const handleSubmit = async () => {
       if (!image) return alert('Please upload a photo');
    setLoading(true);
    const formData = new FormData();
    formData.append("img", image);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/upload",
        formData
      );
  
      setResult(response.data);
      console.log(response.data);
      setImgData(`http://127.0.0.1:5000${response.data.imagepath}`);
         
 
    } catch (error) {
        alert('Error identifying plant');
      console.error(error);

    }
      setLoading(false);
  };
  return (
    <div className="common container">
      <div className='card'>
             <h1 className='fw-bold hd-common mt-2'>🌱 Plant Disease Identifier</h1>
      <div className='my-4'>
        <div className='row'>
          <div className='col-lg-10 mb-2'> 
             <input type="file" accept="image/*" onChange={handleFileChange}
       className='form-control form-padding' name='image'/></div>
          <div className='col-lg-2'>
  <button onClick={handleSubmit} type='submit' disabled={loading} >
        {loading ? 'Identifying...' : 'Identify Plant'}
      </button>
          </div>
          <small className='text-secondary'>Upload plant's image for better dignosis...</small>
              </div>
      </div>
    
    
      {result && (
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-4 box-img'>
                 <img src={imgData} alt="uploaded image" className='img-upload'/>      
            </div>
                <div className='col-lg-8' style={result.prediction.cure=="Not applicable."?{color:"#c81414"}:{color:"#087c08"}}>
          <h3>Plant Name : {result.prediction.name}</h3><hr/>
          <p>Diseases : {result.prediction.cause}</p>
          <p>Treatments : {result.prediction.cure}</p>
  
                </div>
             </div>
        </div>
      )}
       </div>
 
    </div>
  );
}

export default Disease;