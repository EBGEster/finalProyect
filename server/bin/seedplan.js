const mongoose = require("mongoose");
const Plan = require("../models/Plan.Model");
require('dotenv').config()

mongoose.connect(`${process.env.DB}`, { useNewUrlParser: true });
Plan.collection
  .drop()
  .then()
  .catch();

  const plans= [{
    title: "Tintado de lunas de coche" ,
    description:"El tintado de lunas es una personalización para todos los vehículos, tanto particulares como comerciales. Un vehículo tintado puede rechazar el 66% de la energía solar. Además, es capaz de bloquear hasta 99% de los rayos UVA, con la protección que esto supone para el vehículo y sus ocupantes." ,
    price: 49.95,
    units:120,
    category: "automotive",
    terms: "Las lunas tintadas están homologadas para la ITV. Validez: 6 meses desde la fecha de compra. Reservas con 24 h de antelación. Horario: de L-V de 9h-20h, S de 9h-14h (posibilidad de concertar cita fuera de este horario).",
    imageUrl: "https://www.carglass.es/blog/wp-content/uploads/2016/05/Carglass_tintadolunas_1-720x480.jpg",
    companyName: "DuchalCar",
    address: "Avenida Madrid, 11, nave 2, Madrid, Madrid 28342",
    city: "Madrid",
    location: {
        lat: 40.209301,
        lng: -3.684770 
    }   
},{
    title: "Lavado completo de vehículo" ,
    description:"Lavado exterior. Limpieza de carrocería, llantas y cristales. Tratamiento de ozono. Retoque final y brillo de neumáticos. Limpieza interior. Aspirado de asientos, alfombrillas y contornos de suelo. Limpieza de cristales. Limpieza y acondicionador de los plásticos interiores. Ambientado del vehículo. Pequeños retoques de manchas superficiales en el interior. Aspirado del maletero. Duración: 45 minutos" ,
    price: 16.95,
    units:800,
    category: "automotive",
    terms: "Fechas excluidas: del 21 de agosto al 04 de septiembre de 2017, permanecerán cerrados por vacaciones. Validez: 6 meses desde la fecha de compra. 4X4, rancheras y monovolúmenes suplemento de 5€ para el lavado sin tapicería y suplemento de 20€ para el lavado con tapicerías.",
    imageUrl: "https://www.negociosrentablesyotros.com/wp-content/uploads/2012/09/lavado-de-coches-exterior.jpg",
    companyName: "Wash And Wash Castellana 200",
    address: "Paseo de la Castellana, 200, Madrid, Madrid 28046",
    city: "Madrid",
    location: {
        lat: 40.462418,
        lng: -3.689053
    }
      
},
{
    title: "Revisión ITV para vehículos a gasolina" ,
    description:"Todos los vehículos que circulan por España están obligados a pasar la ITV. Coches y motos: cuando son nuevos, cada 4 años después de su primera matriculación. Después, cada 2 años hasta que cumplir los 10 años. Después. cada año. Vehículos industriales: cuando son nuevos, cada 2 años después de su primera matriculación. Después, cada 2 años hasta cumplir los 6 años. Después, cada año hasta cumplir los 10 años. A partir de entonces, cada seis meses." ,
    price: 25.95,
    units:500,
    category: "automotive",
    terms: "Vehículos industriales de más de 3.500 kilos excluidos. Válido solo para inspecciones periódicas. Válido para vehículos de la categoría: diesel, gasolina, motos y ciclomotores. ",
    imageUrl: "https://fotos01.autofacil.es/2014/05/13/646x260/itv.jpg",
    companyName: "OCA ITV ",
    address: "Calle de Rey Pastor, 28, Leganés, Madrid 28914",
    city: "Madrid",
    location: {
        lat: 40.209301,
        lng: -3.684770 
    } 
},
// {
//     title: "" ,
//     description:"" ,
//     price: 49.95,
//     units:120,
//     category: "automotive",
//     terms: "",
//     imageUrl: "",
//     companyName: "",
//     address: "",
//     city: "Madrid",
//     lat: 40.209301,
//     long: -3.684770 ,    
// },
// {
//     title: "" ,
//     description:"" ,
//     price: 49.95,
//     units:120,
//     category: "automotive",
//     terms: "",
//     imageUrl: "",
//     companyName: "",
//     address: "",
//     city: "Madrid",
//     lat: 40.209301,
//     long: -3.684770 ,    
// },
// {
//     title: "" ,
//     description:"" ,
//     price: 49.95,
//     units:120,
//     category: "automotive",
//     terms: "",
//     imageUrl: "",
//     companyName: "",
//     address: "",
//     city: "Madrid",
//     lat: 40.209301,
//     long: -3.684770 ,    
// },
// {
//     title: "" ,
//     description:"" ,
//     price: 49.95,
//     units:120,
//     category: "automotive",
//     terms: "",
//     imageUrl: "",
//     companyName: "",
//     address: "",
//     city: "Madrid",
//     lat: 40.209301,
//     long: -3.684770 ,    
// },
// {
//     title: "" ,
//     description:"" ,
//     price: 49.95,
//     units:120,
//     category: "automotive",
//     terms: "",
//     imageUrl: "",
//     companyName: "",
//     address: "",
//     city: "Madrid",
//     lat: 40.209301,
//     long: -3.684770 ,    
// },
// {
//     title: "" ,
//     description:"" ,
//     price: 49.95,
//     units:120,
//     category: "automotive",
//     terms: "",
//     imageUrl: "",
//     companyName: "",
//     address: "",
//     city: "Madrid",
//     lat: 40.209301,
//     long: -3.684770 ,    
// },
// {
//     title: "" ,
//     description:"" ,
//     price: 49.95,
//     units:120,
//     category: "automotive",
//     terms: "",
//     imageUrl: "",
//     companyName: "",
//     address: "",
//     city: "Madrid",
//     lat: 40.209301,
//     long: -3.684770 ,    
// },
// {
//     title: "" ,
//     description:"" ,
//     price: 49.95,
//     units:120,
//     category: "automotive",
//     terms: "",
//     imageUrl: "",
//     companyName: "",
//     address: "",
//     city: "Madrid",
//     lat: 40.209301,
//     long: -3.684770 ,    
// },
// {
//     title: "" ,
//     description:"" ,
//     price: 49.95,
//     units:120,
//     category: "automotive",
//     terms: "",
//     imageUrl: "",
//     companyName: "",
//     address: "",
//     city: "Madrid",
//     lat: 40.209301,
//     long: -3.684770 ,    
// },
// {
//     title: "" ,
//     description:"" ,
//     price: 49.95,
//     units:120,
//     category: "automotive",
//     terms: "",
//     imageUrl: "",
//     companyName: "",
//     address: "",
//     city: "Madrid",
//     lat: 40.209301,
//     long: -3.684770 ,    
// },
// {
//     title: "" ,
//     description:"" ,
//     price: 49.95,
//     units:120,
//     category: "automotive",
//     terms: "",
//     imageUrl: "",
//     companyName: "",
//     address: "",
//     city: "Madrid",
//     lat: 40.209301,
//     long: -3.684770 ,    
// },

]
Plan.create(plans)
 .then(plans => {
    
    console.log(`Created, ${plans.length} plans`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err))
  ;