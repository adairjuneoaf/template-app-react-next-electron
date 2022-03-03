/** @type {import('next').NextConfig} */

module.exports = {
  compiler: {
    ssr: true,
    styledComponents: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  reactStrictMode: true,

  webpack(config, { isServer }) {
    if (!isServer) {
      config.target = "electron-renderer";
    }

    return config;
  },
};
