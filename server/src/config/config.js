// default config
module.exports = {
  workers: 1,
  jwt: {
    secret: '123456789',
    cookie: 'jwt-token',
    expire: 60 * 60 * 24 * 3, // 秒
  },
  wx: {
    appId: "wx8629f7d4ee735720",
    appSecret: "8bf8be2dda22838da2f01723e726159a",
  }
};
