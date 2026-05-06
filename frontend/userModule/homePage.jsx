import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import '../css/home.css';
import pyc from '../images/farmer-retailer.svg'
import MainPlantify from './mainPlantify';

const HomePage = () => {

  return (
    <>
    <div className="homepage ">
      <BrowserRouter>
    <MainPlantify />
    </BrowserRouter>
      <section className="hero">
        <div className="hero-content py-4">
          <h1 className="hero-title">
            Detect Plant Diseases
            <span className="highlight"> Instantly</span>
          </h1>
          <p className="hero-subtitle">
            Upload a photo of your plant and get instant diagnosis with treatment recommendations.
            Powered by Machine Learning
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Plants Analyzed</span>
            </div>
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Disease Types</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={pyc} alt="Plant detection" />
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Our Plant Doctor?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Results in under 3 seconds</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Highly Accurate</h3>
              <p>95%+ accuracy rate</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Free Forever</h3>
              <p>Unlimited scans at no cost</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Works perfectly on all devices</p>
            </div>
          </div>
        </div>
      </section>

       <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Save Your Plants?</h2>
            <p>Upload your first image now and get instant diagnosis</p>
            <button className="btn btn-cta" onClick={()=>{
              window.location.reload();
              window.location.href="http://localhost:3000/diseases";}}>Start Diagnosis</button>
          </div>
          </div>
        </section>
  

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Plant Disease Detection. Made with ❤️ for plant lovers.</p>
        </div>
      </footer>
    </div>  </>
  );
};

export default HomePage;