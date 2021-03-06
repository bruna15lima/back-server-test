import jwt from 'jsonwebtoken';

import User from '../models/User';

class SessionControler {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'A senha não está correta' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, '996e573ac9e6a95e046ef731649fe0c9', {
        expiresIn: '17d',
      }),
    });
  }
}

export default new SessionControler();
