import { modulo1 } from './module1/index';
import { modulo2 } from './module2/index';

export const docs = {
    paths: {
        '/appModulo1': {
            ...modulo1,
        },
        '/appModulo2': {
            ...modulo2,
        },
    },
};
