import app from './server';
import db from './models/postgres';

const PORT = 3001;

(async () => {
  await db.sequelize.sync();
  console.log('database connection successful 👻');
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on http://localhost:${PORT} 🚀`);
  });
})();
