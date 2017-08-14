const defaultConfig = {
  devToolsDisabled: true,
  APIKeys: {
    openWeather: '2f4fcb0f4ab81fc32f8eee8c1b1de3c1'
  }
};

const env = process.env.REACT_APP_ENV || 'development';
const specificConfig = require(`./${env}.js`).default;

export default Object.assign(defaultConfig, specificConfig);
