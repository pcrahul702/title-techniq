// pages/api/sendEmail.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { Transporter } from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configure nodemailer with your email service provider's settings
    const transporter: Transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'devdeveloper330@gmail.com',
        pass: 'Kumar@702',
      },
    });

    // Email content
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'recipient-email@example.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
