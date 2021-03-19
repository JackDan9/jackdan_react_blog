const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const IS_DEV = ["development"].includes(process.env.NODE_ENV);

const DEV_API = "http://localhost:3000/api";
const PROD_API = "https://cnodejs.org/api/v1";

export default {
  api: IS_PROD ? PROD_API : DEV_API
}
