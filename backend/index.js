const express = require("express");
const cors = require("cors");
const app = express();
const fileUpload = require("express-fileupload");

const {
  logErrors,
  boomErrorHandler,
  errorHandler,
  ormErrorHandler
} = require("./middlewares/error.handler");

const { config } = require("./config");
const apiRoutes = require("./routes");

app.use(express.static('public'));

app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require('./utils/auth')

// Routes
app.get('/', (req, res) => {
  res.send('API DISNEY')
})
apiRoutes(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log("SERVER ON");
});
