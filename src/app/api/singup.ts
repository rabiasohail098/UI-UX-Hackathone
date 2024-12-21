// pages/api/signup.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    // Aap yahan backend logic likh sakte hain (e.g., save user to database)
    console.log('User Signed Up:', { name, email, password });

    // Send a response back to frontend
    res.status(200).json({ message: 'User signed up successfully' });
  } else {
    // Method Not Allowed
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
