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
    console.log("params",req.params)
    transporter.sendMail({
        from: '"Disfruton App" <process.env.EMAIL>',
        to: req.params.email,
        subject: 'Gracias por tu compra en Disfrutón App',
        text: 'Mensaje de bienvenida',
        html:  `<h2>Tu confirmación de Disfrutón</h2>
        <p>¡Tu Disfrutón ya está listo para ser utilizado!</p>
        <p>DERECHO DE DESISTIMIENTO
        Tienes derecho a desistir de la compra de tu cupón
        en el plazo de 14 días naturales a contar desde el
        día en que recibas el email de confirmación de tu
        compra, salvo que dicho derecho no sea aplicable
        de conformidad con la Ley y así se especifique en
        las condiciones especiales de la oferta. Asimismo, si
        canjeas voluntariamente tu cupón durante ese
        plazo de 14 días, perderás tu derecho a desistir de
        la compra.</p>
        <p>CANJE
        Excepto si el apartado condiciones dice lo
        contrario, tienes el derecho a cancelar la compra
        del cupón dentro de los siguientes 14 días
        naturales desde el día que recibiste el email de
        confirmación de tu compra. Sin embargo, si canjeas
        el cupón dentro de este periodo de 14 días,
        perderás el derecho a desistimiento.</p>
        <img src=https://res.cloudinary.com/ebg-ester/image/upload/v1567110748/el9soo8m2e5zaqfzfutd.png>`,
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