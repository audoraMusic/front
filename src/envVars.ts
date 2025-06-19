import dotenv from "dotenv";
dotenv.config();

export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT;

export const LOCAL_AUTH_PATH = process.env.NEXT_PUBLIC_LOCAL_AUTH_PATH;
export const LOCAL_REG_PATH = process.env.NEXT_PUBLIC_LOCAL_REG_PATH;
export const LOCAL_TOKEN_PATH = process.env.NEXT_PUBLIC_LOCAL_TOKEN_PATH;

export const REMOTE_AUTH_PATH = process.env.NEXT_PUBLIC_REMOTE_AUTH_PATH;
export const REMOTE_REG_PATH = process.env.NEXT_PUBLIC_REMOTE_REG_PATH;
export const REMOTE_TOKEN_PATH = process.env.NEXT_PUBLIC_REMOTE_TOKEN_PATH;
