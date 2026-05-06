from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import json
import uuid
import tensorflow as tf
import os

app = Flask(__name__,static_folder='uploadimages',static_url_path='/uploadimages')

# CORS Enable
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Load Model
model = tf.keras.models.load_model("models/plant_disease_recog_model_pwp.keras")
label = ['Apple___Apple_scab',
 'Apple___Black_rot',
 'Apple___Cedar_apple_rust',
 'Apple___healthy',
 'Background_without_leaves',
 'Blueberry___healthy',
 'Cherry___Powdery_mildew',
 'Cherry___healthy',
 'Corn___Cercospora_leaf_spot Gray_leaf_spot',
 'Corn___Common_rust',
 'Corn___Northern_Leaf_Blight',
 'Corn___healthy',
 'Grape___Black_rot',
 'Grape___Esca_(Black_Measles)',
 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
 'Grape___healthy',
 'Orange___Haunglongbing_(Citrus_greening)',
 'Peach___Bacterial_spot',
 'Peach___healthy',
 'Pepper,_bell___Bacterial_spot',
 'Pepper,_bell___healthy',
 'Potato___Early_blight',
 'Potato___Late_blight',
 'Potato___healthy',
 'Raspberry___healthy',
 'Soybean___healthy',
 'Squash___Powdery_mildew',
 'Strawberry___Leaf_scorch',
 'Strawberry___healthy',
 'Tomato___Bacterial_spot',
 'Tomato___Early_blight',
 'Tomato___Late_blight',
 'Tomato___Leaf_Mold',
 'Tomato___Septoria_leaf_spot',
 'Tomato___Spider_mites Two-spotted_spider_mite',
 'Tomato___Target_Spot',
 'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
 'Tomato___Tomato_mosaic_virus',
 'Tomato___healthy']

# Load Disease Labels
with open("plant_disease.json", "r") as file:
    plant_disease = json.load(file)

# Create Upload Folder
@app.route('/about/plantify-project',methods=['GET'])
def about():
  return jsonify({
       "email": "salonisharma002002@gmail.com",
        "contact": "+918423370180",
  }),200
     


UPLOAD_FOLDER = "uploadimages"

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Image Preprocessing
def extract_features(image):

    image = tf.keras.utils.load_img(image,target_size=(160, 160))
    feature = tf.keras.utils.img_to_array(image)
    feature = np.array([feature])
    return feature

# Prediction Function
def model_predict(image):

    img = extract_features(image)
    prediction = model.predict(img)
    prediction_label = plant_disease[prediction.argmax()]
    return prediction_label

# API Route
@app.route('/upload', methods=['POST'])
def uploadimage():

    try:
        if 'img' not in request.files:

            return jsonify({
                "success": False,
                "message": "No image uploaded"
            }), 400

        image = request.files['img']
  
        temp_name = f"uploadimages/temp_{uuid.uuid4().hex}"

        image.save(f'{temp_name}_{image.filename}')
        print(f'{temp_name}_{image.filename}')
        
        prediction = model_predict(f'./{temp_name}_{image.filename}')
   
        return jsonify({
            "success": True,
            "imagepath": f'/{temp_name}_{image.filename}',
              "prediction" : prediction
        })

    except Exception as e:

        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

# Run Server
if __name__ == "__main__":

    app.run(
        host='0.0.0.0',
        port=5000,
        debug=True
    )