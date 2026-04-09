// utils/generatePortfolio.js

// Import ALL images dynamically from assets
const allImages = import.meta.glob(
  "/src/assets/**/*.{webp,jpg,jpeg,png}",
  { eager: true }
);

const generateImages = (category) => {
  const { type, folder } = category;

  const folderPath = `/src/assets/${folder}`;

  const images = Object.entries(allImages)
    .filter(([path]) => path.startsWith(folderPath))
    .map(([path, module], index) => ({
      id: `${type}-${index}`,
      url: module.default,
      alt: `Modern ${type.replace("_", " ")} yuva interior design`,
      title: `${type} design`,
    }));

  return images;
};

export default generateImages;