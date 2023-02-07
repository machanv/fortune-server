const { APP_PORT } = require('./config/config.default');

const app = require('./app');

app.listen(APP_PORT, () => {
  console.log(`app is running on http://localhost:${APP_PORT}`);
});
