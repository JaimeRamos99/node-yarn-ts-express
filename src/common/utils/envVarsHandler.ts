import dotenv from 'dotenv';
dotenv.config();

export const envVars = {
    ENVIRONMENT: process.env.NODE_ENV,
    PORT: process.env.PORT,
};
