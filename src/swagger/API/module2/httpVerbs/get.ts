//import f from '../../../components/index';
export const getRequest = {
    get: {
        tags: ['module2'],
        description: 'create a modulo1 instance',
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#components/schemas/Modulo1',
                    },
                },
            },
        },
        responses: {
            '201': {
                description: 'Todo created successfully',
            },
            '500': {
                description: 'Server error',
            },
        },
    },
};
