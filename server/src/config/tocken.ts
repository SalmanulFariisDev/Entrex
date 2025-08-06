import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export function generateToken(userId: string, role: string): string {
    console.log('inside...............',process.env.JWT_SECRET_KEY);
    
  const secretKey = process.env.JWT_SECRET_KEY;
    console.log("seccret",secretKey);
    
  if (!secretKey) {
    throw new Error("JWT_SECRET_KEY not found");
  }

  return jwt.sign(
    { userId, role },
    secretKey,
    { expiresIn: '7d' }  
  );
}
