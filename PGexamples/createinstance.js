const { Client } = require("pg");

const client = new Client({
  host: "",
  user: "postgres",
  password: "password",
  port: 5432,
});

const createDatabase = () => {
  client.connect();
  client.query("CREATE DATABASE pgdatabase", (err, result) => {
    if (!err) {
      console.log(result);
    } else {
      console.log(err);
    }
  });

  client.end();
};




