import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: 'Token não fornecido!' });
    return;
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    res.status(401).json({ message: 'Token com formato inválido!' });
    return;
  }

  const token = parts[1];

  try {
    const secret = "desafio_secreto"; 
    
    const decoded = jwt.verify(token, secret);
    (req as any).user = decoded;

    return next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido ou expirado!' });
    return;
  }
};