module.exports = {
  images: {
    domains: ["randomuser.me"],
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: { images: { layoutRaw: true } },
};
