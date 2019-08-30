var QRCode = require('qrcode')


module.exports = ({ companyName, title, imageUrl, price, address, city, terms, qrData}) => {
   let qrCode = ""
   console.log(companyName)
   return QRCode.toDataURL(qrData)
      .then(qr => {
          return qrCode = qr //console.log(qr, "Ahora soy una promesa babe")
      })
      .then(x => {//console.log(qrCode, "estoy aqui porque quiero y no porque raluca me lo haya dicho, console.log()")
         const today = new Date();
     return (`
         <!doctype html>
         <html>
            <head>
               <meta charset="utf-8">
               <title>PDF Result Template</title>
               <style>
               img {
                  width: 150px
               }

               
                  .invoice-box {
                  max-width: 800px;
                  margin: auto;
                  padding: 30px;
                  border: 1px solid #eee;
                  box-shadow: 0 0 10px rgba(0, 0, 0, .15);
                  font-size: 16px;
                  line-height: 24px;
                  font-family: 'Helvetica Neue', 'Helvetica',
                  color: #555;
                  }
                  .margin-top {
                  margin-top: 50px;
                  }
                  .justify-center {
                  text-align: center;
                  }
                  .invoice-box table {
                  width: 100%;
                  line-height: inherit;
                  text-align: left;
                  }
                  .invoice-box table td {
                  padding: 5px;
                  vertical-align: top;
                  }
                  .invoice-box table tr td:nth-child(2) {
                  text-align: right;
                  }
                  .invoice-box table tr.top table td {
                  padding-bottom: 20px;
                  }
                  .invoice-box table tr.top table td.title {
                  font-size: 45px;
                  line-height: 45px;
                  color: #333;
                  }
                  .invoice-box table tr.information table td {
                  padding-bottom: 40px;
                  }
                  .invoice-box table tr.heading td {
                  background: #eee;
                  border-bottom: 1px solid #ddd;
                  font-weight: bold;
                  }
                  .invoice-box table tr.details td {
                  padding-bottom: 20px;
                  }
                  .invoice-box table tr.item td {
                  border-bottom: 1px solid #eee;
                  }
                  .invoice-box table tr.item.last td {
                  border-bottom: none;
                  }
                  .invoice-box table tr.total td:nth-child(2) {
                  border-top: 2px solid #eee;
                  font-weight: bold;
                  }
                  @media only screen and (max-width: 600px) {
                  .invoice-box table tr.top table td {
                  width: 100%;
                  display: block;
                  text-align: center;
                  }
                  .invoice-box table tr.information table td {
                  width: 100%;
                  display: block;
                  text-align: center;
                  }
                  }
               </style>
            </head>
            <body>
            <img src="https://res.cloudinary.com/ebg-ester/image/upload/v1567110748/el9soo8m2e5zaqfzfutd.png" alt="logo">
            <div class="container">
                <div class="row">
                    <div class="col-8 .invoice-box">
                        <h2>${companyName}</h2>
                        <h1>${title}</h1>
                        <p><strong>Fecha de compra: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}</strong></p>
                        <small>El cupón caduca a los 6 meses desde la fecha de compra</small>
        
                    </div>
                    <div class="col-4 bg-grey">
                        <img src=${imageUrl} alt=${companyName}>
                    </div>    
                </div>
        
                <div class="row">
                    <div class="col-4">
                        <section>
                        <h3>Detalles del pedido</h3>
                        <p>${price}</p>
                    </section>
                    <section>
                        <h3>Método de reserva</h3>
                        <p>1. Se necesita previa reserva llamando al 065-
                                63-72-22 o escribiendo un correo a
                                info@${companyName}.com
                                y tendrás que dar tu código de Groupon.
                                Lunes a Viernes de 19-20h y
                                de 20-21h.
                                Sábados de 21-22h.
                                </p>
                    </section>
                    <section>
                        <h3>Dirección</h3>
                        <h4>${companyName}</h4>
                        <p>${address}</p>
                        <p>${city}</p>
                    </section>
                    </div>
                    <div class="col-4">
                        <section>
                            <h3>Condiciones</h3>
                            <p>${terms}</p>
                        </section>
                    </div>
                    <div class="col-4 bg-grey">
                        <section>
                            <h5>DERECHO DE DESISTIMIENTO</h5>
                            <p>Tienes derecho a desistir de la compra de tu cupón
                                    en el plazo de 14 días naturales a contar desde el
                                    día en que recibas el email de confirmación de tu
                                    compra, salvo que dicho derecho no sea aplicable
                                    de conformidad con la Ley y así se especifique en
                                    las condiciones especiales de la oferta. Asimismo, si
                                    canjeas voluntariamente tu cupón durante ese
                                    plazo de 14 días, perderás tu derecho a desistir de
                                    la compra.</p>
                        </section>
                        <section>
                            <h5>CANJE</h5>
                            <p>Excepto si el apartado condiciones dice lo
                                    contrario, tienes el derecho a cancelar la compra
                                    del cupón dentro de los siguientes 14 días
                                    naturales desde el día que recibiste el email de
                                    confirmación de tu compra. Sin embargo, si canjeas
                                    el cupón dentro de este periodo de 14 d</p>
                        </section>
                    </div>
        
                </div>
                <div class="row">
                    <div class="col4">
                            <img src=${qrCode} alt="qrcode"/>
                    </div>
                </div>
            </div>
            
        </body>
               
         `)
     
      
      
      
      })
         .catch(err => console.log(err, "sere yo el error?"))
      
      }


      // <div class="invoice-box">
      //             <table cellpadding="0" cellspacing="0">
      //                <tr class="top">
      //                   <td colspan="2">
      //                      <table>
      //                         <tr>
      //                            <td class="title"><img  src="https://i2.wp.com/cleverlogos.co/wp-content/uploads/2018/05/reciepthound_1.jpg?fit=800%2C600&ssl=1"
      //                               style="width:100%; max-width:156px;"></td>
      //                            <td>
      //                               Datum: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
      //                            </td>
      //                         </tr>
      //                      </table>
      //                   </td>
      //                </tr>
      //                <tr class="information">
      //                   <td colspan="2">
      //                      <table>
      //                         <tr>
      //                            <td>
      //                               Customer name: ${name}
      //                            </td>
      //                            <td>
      //                               Receipt number: ${receiptId}
      //                            </td>
      //                         </tr>
      //                      </table>
      //                   </td>
      //                </tr>
      //                <tr class="heading">
      //                   <td>Bought items:</td>
      //                   <td>Price</td>
      //                </tr>
      //                <tr class="item">
      //                   <td>First item:</td>
      //                   <td>${price1}$</td>
      //                </tr>
      //                <tr class="item">
      //                   <td>Second item:</td>
      //                   <td>${price2}$</td>
      //                </tr>
      //             </table>
      //             <br />
      //             <img src=${qrCode} />
      //             <h1 class="justify-center">Total price: ${parseInt(price1) + parseInt(price2)}$</h1>
      //          </div>
      //       </body>
      //    </html>