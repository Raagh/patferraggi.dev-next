import type { NextApiRequest, NextApiResponse } from 'next';
import client from '@mailchimp/mailchimp_marketing';

type SubscribeData = {
  email: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<SubscribeData>) {
  const { email } = req.body;

  if (!email) {
    return res.status(400);
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID ?? '';
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;

    client.setConfig({
      apiKey: API_KEY,
      server: DATACENTER,
    });

    const response = await client.lists.addListMember(AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    });

    if (Number(response.status) >= 400) {
      return res.status(400).end();
    }

    return res.status(201).end();
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
