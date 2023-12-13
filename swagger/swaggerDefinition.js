module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Express API with Swagger',
    version: '1.0.0',
    description: 'API documentation using Swagger',
  },
  paths: {
    '/api/data': {
      get: {
        summary: 'Returns sample data',
        description: 'Get sample data from the server',
        responses: {
          200: {
            description: 'Sample data response',
            content: {
              'application/json': {
                example: {
                  data: 'Sample data',
                },
              },
            },
          },
        },
      },
    },
    '/api/user': {
      post: {
        summary: 'Create a new user',
        description: 'Create a new user with provided data',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              example: {
                username: 'john_doe',
                email: 'john@example.com',
              },
            },
          },
        },
        responses: {
          201: {
            description: 'User created successfully',
          },
          400: {
            description: 'Bad request, check input data',
          },
        },
      },
    },
    '/api/user/{id}': {
      get: {
        summary: 'Get user by ID',
        description: 'Get user details based on the provided ID',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            description: 'ID of the user',
          },
        ],
        responses: {
          200: {
            description: 'User details retrieved successfully',
            content: {
              'application/json': {
                example: {
                  username: 'john_doe',
                  email: 'john@example.com',
                },
              },
            },
          },
          404: {
            description: 'User not found',
          },
        },
      },
    },
  },
};