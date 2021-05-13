module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "comigo",
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
