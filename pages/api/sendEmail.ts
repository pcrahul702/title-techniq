// pages/api/sendEmail.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { full_name, company_name, email,mobile,message } = req.body;
    
    // Configure nodemailer with your email service provider's settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'devdeveloper330@gmail.com',
        pass: 'yipholwbolsngqlz',
      },
    });

    // Email content
    const mailOptions = {
      from: 'devdeveloper330@gmail.com',
      to: 'pcrahul702@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${full_name}\nEmail: ${email}\nMessage: ${message}`,
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
