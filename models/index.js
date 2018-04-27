const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack",{logging:false});


const Page = db.define("pages", {
  title: { type: Sequelize.TEXT, allowNull: false }, // can you use destructuring inside an object?
  slug: { type: Sequelize.TEXT, allowNull: false },
  content: { type: Sequelize.TEXT, allowNull: false },
  status: { type: Sequelize.ENUM("open", "closed") }
});

const User = db.define("user", {
  name: { type: Sequelize.TEXT, allowNull: false },
  email: { type: Sequelize.TEXT, allowNull: false }
});

module.exports = {
  Page,User, db
};