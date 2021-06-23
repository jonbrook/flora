import app from './server';
import sequelize from './models/postgres';

const PORT = 3001;

(async () => {
  await sequelize.sync();
  // eslint-disable-next-line no-console
  console.log('database connection successful 👻');
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on http://localhost:${PORT} 🚀`);
  });
})();
