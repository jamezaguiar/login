const jwt = require('jsonwebtoken');
const User = require('../models/User');

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User does not exists' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id } = user;

    return res.json({
      user: { id, email },
      token: jwt.sign({ id }, '940f6387e6caacf44a41f5e36a025069', {
        expiresIn: '7d',
      }),
    });
  }
}

module.exports = new SessionController();
