const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinitions = require('./swagger/swaggerDefinition.js');
const routes = require('./routes');

const app = express();
const port = 3000;
const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const swaggerOptions = {
    definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Title',
      version: '1.0.0',
      description: 'API Documentation for Your API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};


const swaggerSpec = swaggerJSDoc(swaggerOptions);


app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { customCssUrl: CSS_URL }));
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})
