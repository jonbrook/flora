const express = require('express');
const app = new express();
const cors = require('cors');
const router = require('./router.js');
const connectDb = require('./models/index.js');

const PORT = 3001;
connectDb()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Db connected 👍🏽');
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log(error);
  });

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Houston we are a go for launch on http://localhost:${PORT} 🚀`);
});
