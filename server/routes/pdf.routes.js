const express = require('express')
const router  = express.Router()
const pdf          = require('html-pdf')
const pdfTemplate  = require('../documents')

const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.PASSWORD}`
    }
})

// const fs = require('fs')

// POST - PDF generation and fetching on the data

router.post('/create-pdf', (req, res) => {
    pdfTemplate(req.body).then(template => {
        pdf.create(template, {}).toFile('routes/result.pdf', (err) =>{
            if(err) {
                console.log('error')
                res.send(Promise.reject) 
            }
            res.send(Promise.resolve())
          
        })
    } )
})

// GET - Send the generated pdf to the client

router.get('/fetch-pdf/:email', (req,res) => {
    // fs.readdir(`${__dirname}/..`, function(err, items) {
    //     console.log(`${__dirname}/.. contains:`)
    //     console.log(items);
    // });
    console.log(req.params)
    transporter.sendMail({
        from: '"Disfruton App" <process.env.EMAIL>',
        to: req.params.email,
        subject: 'Gracias por registrarte en Disfruton App',
        text: 'Mensaje de bienvenida',
        html:  `<h2>Ya eres parte de la página con los mejores planes</h2>
        <p>You can start sharing your favourites worlds locations with the other user and discover
        where can you go in your next travel, what can you do there and why have to go, the triple 'W' + I do.</p>
        <p>Thank you for your registration and enjoy!</p>
        <img src=https://res.cloudinary.com/dpkvkfi5u/image/upload/v1564399013/wIdo-gallery/logo-wIdo.png.png>`,
        attachments: [
            {
                filename: "cupon.pdf",
                path: `${__dirname}/result.pdf`
            }
        ]
    })
    res.sendFile(`${__dirname}/result.pdf`)
    
})


module.exports = router