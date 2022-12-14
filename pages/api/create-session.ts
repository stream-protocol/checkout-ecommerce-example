import { NextApiRequest, NextApiResponse } from "next";

import { streampay } from "../../helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { items } = req.body;

    try {
      const response = await streampay.session.create({
        success_url: "https://ecommerce.streamprotocol.app/success",
        cancel_url: "https://ecommerce.streamprotocol.app/",
        tokens: ["str", "samo", "dust"],
        items: items,
      });

      return res.status(200).json(response);
    } catch (error) {
      console.log(error);

      return res.status(200).json({
        error: "Error creating session",
      });
    }
  } else {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }
};

export default handler;
