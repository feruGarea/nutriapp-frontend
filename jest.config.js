export default function (api) {
  api.cache(true);
  return {
  preset: 'jest-expo',
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo(nent)?|@expo|expo-modules-core|native-base|@expo-google-fonts)'
  ]}
};