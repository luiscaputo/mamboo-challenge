export default {
  post: {
    tags: ['Tasks'],
    description: 'Object to send when create a new task',
    operationId: 'create',
    parameters: [
      {
        name: 'title',
        in: 'body',
        schema: {
          type: 'string',
          description: 'Title for create task',
          example: 'Starting documentation on swagger',
        },
      },
      {
        name: 'description',
        in: 'body',
        schema: {
          type: 'string',
          description: 'Describe this task',
          example: 'This task is to document API',
        },
      },
      {
        name: 'priority',
        in: 'body',
        schema: {
          type: 'number',
          description: 'Whats the priority have this task',
          example: 8,
        },
      },
      {
        name: 'status',
        in: 'body',
        schema: {
          type: 'string',
          description: 'switch whats the status of this task',
          example: 'in-progress',
        },
      },
      {
        name: 'members',
        in: 'body',
        schema: {
          type: 'string',
          description:
            'Put whats the member that have e responsibility to make this task',
          example: '6387fad447bb3c76b54faf05',
        },
      },
      {
        name: 'tags',
        in: 'body',
        schema: {
          type: 'string',
          description: 'Put any tag for this task',
          example: 'AUTH',
        },
      },
      {
        name: 'startedAt',
        in: 'body',
        schema: {
          type: 'date',
          description:
            'Put the date to start this task, use this format DD-MM-YYYY',
          example: '01/12/2022',
        },
      },
      {
        name: 'finishedAt',
        in: 'body',
        schema: {
          type: 'date',
          description:
            'Put the date to finish this task, use this format DD-MM-YYYY',
          example: '01/12/2022',
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
                  $ref: '#/components/schemas/Tasks',
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
