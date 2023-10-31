const withMarkdoc = require("@markdoc/next.js");
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer(
  withMarkdoc(/* options */)({
    pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
  })
);

module.exports = nextConfig;
