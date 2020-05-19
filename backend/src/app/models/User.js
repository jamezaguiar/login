const Sequelize = require('sequelize');
const Model = require('sequelize').Model;

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  checkPassword(password) {
    if (password !== this.password) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = User;
