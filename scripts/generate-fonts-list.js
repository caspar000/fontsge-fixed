const fs = require('fs');
const path = require('path');

// Path to your fonts directory
const fontsDir = path.join(__dirname, '../public/fonts');
// Output path for the JSON file
const outputPath = path.join(__dirname, '../public/fonts.json');

try {
  // Read the fonts directory
  const fontFiles = fs.readdirSync(fontsDir)
    .filter(file => file.endsWith('.ttf') || file.endsWith('.otf'));
  
  // Create a JSON object with the font list
  const fontsList = { fonts: fontFiles };
  
  // Write the JSON file
  fs.writeFileSync(outputPath, JSON.stringify(fontsList, null, 2));
  
  console.log(`Successfully generated fonts list with ${fontFiles.length} fonts at ${outputPath}`);
} catch (error) {
  console.error('Error generating fonts list:', error);
}