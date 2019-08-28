require('dotenv').config();

const express = require('express')
const router  = express.Router()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

router.use(require("body-parser").text());

router.post("/charge", async (req, res) => {

    console.log(req.body)
    try {
        let { status } = await stripe.charges.create({
          amount: 900,
          currency: "eur",
          description: "asdads",
          source: "tok_mastercard"
        });
        console.log(status)
        res.json({ status });
      } catch (err) {
        console.log(err)
        res.status(500).end();
      }
    })
    

module.exports = router