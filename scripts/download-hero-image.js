const https = require('https');
const fs = require('fs');
const path = require('path');

// URL of a high-quality breakfast/brunch image from Unsplash
const imageUrl = 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1920&q=80';

const downloadImage = () => {
  const imagePath = path.join(__dirname, '../public/images/recipy-1.webp');
  
  https.get(imageUrl, (response) => {
    const fileStream = fs.createWriteStream(imagePath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log('Hero image downloaded successfully');
    });
  }).on('error', (err) => {
    console.error('Error downloading image:', err.message);
  });
};

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Download the image
downloadImage(); 