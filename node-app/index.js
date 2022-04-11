const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const crypto = require('crypto');

//configure CORS to let Shopify call Node API
app.use(cors());
var corsOptions = {
    origin: 'http://localhost:9292',
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'OPTIONS']
  }

app.post('/validate-voucher', cors(corsOptions), (req, res, next) => {
  const customerId = req.headers['cid'];
  const hash = req.headers['ch'];

  //the verifiedHash must emulate the same algorithm you used in the .liquid file
  const verifiedHash = crypto.createHmac('sha256', 'xyzqwerty')
    .update(Buffer.from(customerId + 'customer.email').toString('base64')) //get customer.email by querying Shopify Customer API. i kept it as a static string for this demo
    .digest('hex');

  console.log(hash);
  console.log(verifiedHash);

  if (hash == verifiedHash){
    res.send('VALIDATED!');
  }
  else {
      res.send('NOT VALIDATED!');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});