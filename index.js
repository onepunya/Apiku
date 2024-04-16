const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinitions = require('./swagger/swaggerDefinition');
const routes = require('./routes');

const app = express();
const port = 3000;

const swaggerOptions = {
  swaggerDefinition: swaggerDefinitions,
  apis: ['./routes/index.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);


app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})
