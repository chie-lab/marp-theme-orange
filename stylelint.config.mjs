/** @type {import("stylelint").Config} */
export default {
  plugins: ["stylelint-prettier"],
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "prettier/prettier": true,
  },
};
