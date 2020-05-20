// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  const vercel_url = process.env.VERCEL_URL || "Undefined 😢";
  res.json({ vercel_url });
};
