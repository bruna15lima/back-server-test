import jwt from 'jsonwebtoken';

import User from '../models/User';

class SessionControler {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }
  }
}

export default new SessionControler();
