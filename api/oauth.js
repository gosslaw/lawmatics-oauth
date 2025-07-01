export default async function handler(req, res) {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const code = new URLSearchParams(body).get('code');
      console.log('Authorization code:', code);
      res.status(200).send(`✅ Código recibido: ${code}`);
    });
  } else {
    res.status(200).send('Esperando el código de autorización...');
  }
}
