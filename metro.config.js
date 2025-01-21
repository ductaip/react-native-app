const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

config.resolver.assetExts = [
    ...config.resolver.assetExts,
    'png', 
    'jpg', 
    'jpeg', 
    'svg', 
    'gif', 
    'webp'  
  ];
  

module.exports = withNativeWind(config, { input: "./global.css" });