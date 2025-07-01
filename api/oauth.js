export default async function handler(req, res) {
  if (req.method === 'GET') {
    const code = req.query.code;

    if (code) {
      console.log('Authorization code received:', code);
      res.status(200).send(`Authorization code received: ${code}`);
    } else {
      res.status(400).send('No authorization code found in the query parameters.');
    }

  } else {
    res.status(405).send('Method Not Allowed');
  }
}
