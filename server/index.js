const express = require('express');
const app = new express();
const cors = require('cors');
const router = require('./router.js');
const db = require('./models/postgres.js');

const PORT = 3001;
app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
  await db.sequelize.sync();
  console.log(`database connection successful 👻`);
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on http://localhost:${PORT} 🚀`);
  });
})();
