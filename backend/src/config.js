import dotenv from 'dotenv';

dotenv.config();

export const config = {
    db:{
        URI: process.env.DB_URI
    },
    server:{
        PORT: process.env.PORT
    },
    jwt:{
        SECRET: process.env.JWT_SECRET,
        EXPIRATION: process.env.JWT_EXPIRATION
    },
    admin:{
        EMAIL: process.env.ADMIN_EMAIL, 
        PASSWORD: process.env.ADMIN_PASSWORD
    },
    user:{
        EMAIL: process.env.USER_EMAIL,
        PASSWORD: process.env.USER_PASSWORD
    }
}
