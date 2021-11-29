import { basicInfo } from './basicInfo';
import { docs } from './API/index';
import { appComponents } from './components';

export const swaggerDocument = {
    ...basicInfo,
    ...docs,
    ...appComponents,
};
