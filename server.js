const express = require('express');
const PORT = 8000;
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
app.use(cors());

// SDK de Mercado Pago
const mercadopago = require('mercadopago');

//middleware

app.use(bodyParser.urlencoded({ extended: false }));

// ses
const nodemailer = require('nodemailer');

// Agrega credenciales
mercadopago.configure({
  access_token:
    'TEST-1327704426954238-052917-79ac88f23bd31b0ff0a9aa674eb17661-1132630431',
});

app.get('/data', (req, res) => {
  const data = req.query.body;
  const total = parseInt(req.query.total);
  console.log(data);
  console.log(total);
  function email(req, res) {
    async function main() {
      let transporter = nodemailer.createTransport({
        host: 'email-smtp.us-east-1.amazonaws.com',
        port: 587,
        secure: false,
        auth: {
          user: 'AKIAVIEACO65IXWSKBN7',
          pass: 'BOZFrSKZExZLfD9pmy/pmOf/uN45/yURQByYvNhPBDGl',
        },
      });

      let info = await transporter.sendMail({
        from: 'machadoignacio@hotmail.com', // sender address
        to: 'thehexnugget@gmail.com', // list of receivers
        subject: 'go-cracks', // Subject line
        text: 'Todo funciono correctamente', // plain text body
        html: data, // html body
      });

      console.log('Message sent: %s', info.messageId);

      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
    main().catch(console.error);
  }
  let preference = {
    items: [
      {
        title: 'GoCracks',
        unit_price: total,
        quantity: 1,
      },
    ],
    back_urls: {
      success: 'http://localhost:8000/success',
    },
    auto_return: 'approved',
  };
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      console.log(response.body);
      //const id = response.body.id;
      const urlPay = response.body.init_point;
      res.redirect(urlPay);
    })
    .catch(function (error) {
      console.log(error);
    });
  app.get('/success', (req, res) => {
    console.log(data);
    email();
    res.redirect('https://localhost:3000/');
  });
});

app.listen(PORT, () => console.log('server up'));
