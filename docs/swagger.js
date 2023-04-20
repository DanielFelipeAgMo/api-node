import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
   openapi: '3.0.0',
    info: {
      title: 'API-NODE',
      version: '1.0.0',
    },
    servers:[
      {
        url: "http://localhost:3004/api"
      },
      {
        url: "http://localhost:3000/api"
      }
    ],
  },
  apis: ['./routes/*.js'],
}

const swaggerSpec = swaggerJsdoc(swaggerOptions)
export default swaggerSpec;
