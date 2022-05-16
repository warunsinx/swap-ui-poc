const isProd = process.env.NODE_ENV === "production";

export const env = {
  apiUrl: isProd
    ? process.env.NEXT_PUBLIC_PROD_API_URL
    : process.env.NEXT_PUBLIC_DEV_API_URL,
  bknextClientID: isProd
    ? process.env.NEXT_PUBLIC_PROD_BK_NEXT_CLIENT_ID
    : process.env.NEXT_PUBLIC_DEV_BK_NEXT_CLIENT_ID,
};
