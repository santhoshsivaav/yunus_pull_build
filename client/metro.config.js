// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('@expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
    ...defaultConfig,
    resolver: {
        ...defaultConfig.resolver,
        assetExts: [...defaultConfig.resolver.assetExts, 'db'],
        sourceExts: [...defaultConfig.resolver.sourceExts, 'mjs', 'cjs']
    }
}; 