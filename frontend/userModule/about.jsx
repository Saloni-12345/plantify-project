import "../css/common.css"
  import React, { useEffect, useState } from "react";
import "../css/about.css";
import axios from "axios";

function About() {
   let [data, setData] =useState(null);


useEffect(()=>{
  const fetchData =async ()=>{
  try{
    let response = await axios.get("http://127.0.0.1:5000/about/plantify-project");
    console.log(response.data);
    setData(response.data);
   }catch(err){
    console.log(err)
   }
  }
   fetchData();
},[]);

  return (<>
    <div className="about-container">
      <h1 className="about-title">About Plantify 🌱</h1>
    
      <p className="about-intro mt-4">
        Plantify is an intelligent web platform designed to help farmers, gardeners,
        and plant enthusiasts detect plant diseases, monitor weather conditions,
        and explore a wide variety of plants — all in one place.
      </p>
  </div>
      <div className="about-container-1">
      <div className="about-section">
        <h2>🌾 Our Mission</h2>
        <p>
          Our mission is to empower users with AI-driven tools to identify plant diseases early,
          improve crop health, and promote sustainable agriculture using modern technology.
        </p>
      </div>
      </div>
  <div className="about-container-1">
    
      <div className="about-section ">
        <h2 >Features of Our Website</h2>

        <ul>
          <li>
            <strong>🏠 Home:</strong> A central hub providing an overview of the platform
            and easy navigation to all features.
          </li>

          <li>
            <strong>🖼️ Gallery:</strong> Explore a rich collection of plant images
            to learn about different species and their characteristics.
          </li>

          <li>
            <strong>🌦️ Weather Forecast:</strong> Get real-time weather updates
            for any location to make better agricultural decisions.
          </li>

          <li>
            <strong>🧪 Disease Prediction:</strong> Upload plant images and use our
             model to detect possible diseases instantly.
          </li>
        </ul>
      </div>
      </div>
  <div className="about-container-1">
    
      <div className="about-section">
        <h2>How It Works</h2>
        <p>
          Our system uses machine learning and image processing techniques to analyze
          plant images and identify diseases. Combined with weather insights, users can
          take preventive measures and improve plant health effectively.
        </p>
      </div>
  </div>
    <div className="about-container-1">
    
      <div className="about-section">
        <h2>Why Choose Plantify?</h2>
        <ul>
          <li>✔ Easy-to-use interface</li>
          <li>✔ Fast and accurate predictions</li>
          <li>✔ Useful for farmers, students, and researchers</li>
          <li>✔ Supports smart agriculture practices</li>
        </ul>
      </div>
  </div>
    <div className="about-container-1">
    
      <div className="about-section">
        <h2>📩 Contact Us</h2>
        <p>
          Have questions or suggestions? Feel free to reach out and help us improve!
        </p>
       { data && <h6>✉️ <a href={`mailto:${data.email}`}>{data.email}</a></h6>}
        { data && <h6>📞 <a href={`tel:${data.contact}`}>{data.contact}</a></h6>}
      </div>
   
    </div>
    
    </>
  );
}

export default About;
