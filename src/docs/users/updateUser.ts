export default {
  post: {
    tags: ['Users'],
    description: 'Object to send when update a existent user',
    operationId: 'update',
    parameters: [
      {
        name: '_id',
        in: 'body',
        schema: {
          type: 'string',
          description: 'id for specific user to update',
          example: '6387fad447bb3c76b54faf05',
        },
      },
      {
        name: 'username',
        in: 'body',
        schema: {
          type: 'string',
          description: 'username for user register',
          example: 'luiscaputo',
        },
      },
      {
        name: 'email',
        in: 'body',
        schema: {
          type: 'string',
          description: 'Email for user login',
          example: 'youemail@example.com',
        },
      },
      {
        name: 'password',
        in: 'body',
        schema: {
          type: 'string',
          description: 'Password for user login',
          example: '***********',
        },
      },
      {
        name: 'role',
        in: 'body',
        schema: {
          type: 'date',
          description:
            'User Role, role can be: admin, frontend, backend, ui/ux, devops',
          example: 'admin',
        },
      },
    ],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                },
                data: {
                  type: 'object',
                  $ref: '#/components/schemas/User',
                  null: true,
                },
                message: {
                  type: 'string',
                  null: true,
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Bad Request',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  example: false,
                },
                message: {
                  type: 'string',
                  null: true,
                },
              },
            },
          },
        },
      },
      500: {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  example: false,
                },
                message: {
                  type: 'string',
                  null: true,
                },
              },
            },
          },
        },
      },
    },
  },
};
