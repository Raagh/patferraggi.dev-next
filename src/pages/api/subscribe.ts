import fetch from 'isomorphic-unfetch';
import type { NextApiRequest, NextApiResponse } from 'next';

type SubscribeData = {
  email: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<SubscribeData>) {
  const { email } = req.body;

  if (!email) {
    return res.status(400);
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );

    if (response.status >= 400) {
      return res.status(400).end();
    }

    return res.status(201).end();
  } catch (error) {
    console.log(error)
    return res.status(500).end();
  }
}
