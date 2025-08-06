import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

export interface AuthRequest extends Request {
  userId?: string;
}

export const verifyToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
    
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('yyyyyyyyyyyy');
    
    return res.status(401).json({ message: 'Unauthorized: Token not provided' });
  }

  
  const token = authHeader.split(' ')[1];
  console.log('tet token',token);
  
  try {
   const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
   console.log('decodeeeee',decoded);
   
req.userId = decoded.userId;

    next();
  } catch (error) {
    console.log('erererererer');
    
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};
