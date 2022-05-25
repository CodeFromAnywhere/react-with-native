/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  publicRuntimeConfig: {
    NEXT_PUBLIC_SITE: process.env.NEXT_PUBLIC_SITE,
  },
});
