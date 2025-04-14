const https = require('https');
const fs = require('fs');
const path = require('path');

const imageUrls = [
  // Recipe images
  {
    url: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
    filename: 'recipe1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a',
    filename: 'recipe2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    filename: 'recipe3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
    filename: 'recipe4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    filename: 'recipe5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1546833998-877b37c2e604',
    filename: 'recipe6.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624',
    filename: 'recipe7.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
    filename: 'recipe8.jpg'
  },
  // Article images
  {
    url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d',
    filename: 'article1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f',
    filename: 'article2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    filename: 'article3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629',
    filename: 'article4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    filename: 'article5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352',
    filename: 'article6.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
    filename: 'article7.jpg'
  }
].map(item => ({
  ...item,
  url: `${item.url}?auto=format&fit=crop&w=800&q=80`
}));

const downloadImage = (url, filename) => {
  const imagePath = path.join(__dirname, '../public/images', filename);
  
  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(imagePath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Download all images
imageUrls.forEach(image => {
  downloadImage(image.url, image.filename);
}); 