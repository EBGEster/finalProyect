import React, {Component} from 'react'


//import  {Link} from 'react-router-dom'

import '../styles/CategoryModal.css'


class CategoryModal extends Component {

    constructor(props){
        super(props)
        this.state = [

        ]
    }
 
    render() {
        // console.log(this.state)
        return(

        <div className="container cat-box">
            
                <div className="row">
                    <div className="col-2 cat-sqr">
                    <button className="cat-link" onClick={(e)=>{this.props.handleState(); this.props.handleCatSearchAllPlans()}} > 
                        <div className="cat-elm-div">
                            <img src="https://res.cloudinary.com/ebg-ester/image/upload/v1567101739/vz8o8tpmsb1egnkzwa8p.png" alt="AllPlans" className="cat-img"/><br/>
                            <p className="cat-p">Todos los planes</p>
                        </div>
                    </button>
                    </div>
                    <div className="col-2 cat-sqr">

                    <button className="cat-link" onClick={(e) => {this.props.handleState(); this.props.handleCatSearchBeauty()}} >
                        <div className="cat-elm-div">
                            <img src="https://res.cloudinary.com/ebg-ester/image/upload/v1567101739/ue9svzipsypvy7g0589d.png" alt="beauty" className="cat-img"/><br/>
                            <p className="cat-p">Cuidado personal</p>
                        </div>
                    </button>
                    </div>
                    <div className="col-2 cat-sqr">

                    <button to="/" className="cat-link" onClick={(e) => {this.props.handleState(); this.props.handleCatSearchAuto()}}>
                        <div className="cat-elm-div">
                            <img src="https://res.cloudinary.com/ebg-ester/image/upload/v1567101739/es7ougmdntmvhynbg4z7.png" alt="automotive" className="cat-img"/><br/>
                            <p className="cat-p">Automóvil</p>
                        </div>
                    </button>
                    </div>
                    <div className="col-2 cat-sqr">

                    <button to="/" className="cat-link" onClick={(e) => {this.props.handleState(); this.props.handleCatSearchOcio()}}>
                        <div className="cat-elm-div">
                            <img src="https://res.cloudinary.com/ebg-ester/image/upload/v1567101739/rstvgjsn9vxjorkelxe0.png" alt="leisure" className="cat-img"/><br/>
                            <p className="cat-p">Ocio</p>
                        </div>
                    </button>
                    </div>
                    <div className="col-2 cat-sqr">

                    <button to="/" className="cat-link" onClick={(e) => {this.props.handleState(); this.props.handleCatSearchHealth()}}>
                        <div className="cat-elm-div">
                            <img src="https://res.cloudinary.com/ebg-ester/image/upload/v1567101739/imnnmpo8ujo1vmfaylh3.png" alt="health" className="cat-img"/><br/>
                            <p className="cat-p">Salud y bienestar</p>
                        </div>
                    </button>
                    </div>
                    <div className="col-2 cat-sqr">

                    <button to="/" className="cat-link" onClick={(e) => {this.props.handleState(); this.props.handleCatSearchGastro()}}>
                        <div className="cat-elm-div">
                            <img src="https://res.cloudinary.com/ebg-ester/image/upload/v1567101739/as004vxex5ssofyj1rcc.png" alt="gastro" className="cat-img"/><br/>
                            <p className="cat-p">Comida y bedidas</p>
                        </div>
                    </button>
                    </div>
                </div>
                
        </div>
        // <div className="container cat-box">
        //     <div className="row">

        //         <div className="col-1 categ">
        //         <Link>
        //            <p> <img src={allPlans} alt="AllPlans"/></p>
        //             <small>Todos los planes</small>
        //             </Link>
        //         </div>
        //         <div className="col-1 categ">
        //            <p> <img src={beauty} alt="beauty"/></p>
        //             <small>Cuidado personal</small>
        //         </div>
        //         <div className="col-1 categ">
        //             <p> <img src={auto} alt="automotive"/></p>
        //             <small>Automóvil</small>
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-1 categ">
        //             <p><img src={ocio} alt="leisure"/></p>
        //             <small>Ocio</small>
        //         </div>
        //         <div className="col-1 categ">
        //             <p><img src={health} alt="health"/></p>
        //             <small>Salud Y bienestar</small>
        //         </div>
        //         <div className="col-1 categ">
        //             <p><img src={gastro} alt="gastro"/></p>
        //             <small>Gastronomía</small>
        //         </div>

        //     </div>
        // </div>


         ) }
}

export default CategoryModal