import React, {Component} from 'react'
import allPlans from '../../logos/discount-voucher.svg'
import beauty from '../../logos/dryer.svg'
import auto from '../../logos/car-service.svg'
import ocio from '../../logos/cycling.svg'
import health from '../../logos/heart-rate.svg'
import gastro from '../../logos/dish.svg'

//import  {Link} from 'react-router-dom'

import '../styles/CategoryModal.css'


class CategoryModal extends Component {

    constructor(props){
        super(props)
    }
 
    render() {
        // console.log(this.state)
        return(

        <div className="container cat-box">
            {/* <button onClick={this.props.handleState}>OBeauty</button> */}
            
                 <button className="cat-link" onClick={(e)=>{this.props.handleState(); this.props.handleCatSearchAllPlans()}} > 
                    <div className="cat-elm-div">
                        <img src={allPlans} alt="AllPlans" className="cat-img"/>
                        <p className="cat-p">Todos los planes</p>
                    </div>
                </button>
                <button className="cat-link" onClick={(e) => {this.props.handleState(); this.props.handleCatSearchBeauty()}} >
                    <div className="cat-elm-div">
                        <img src={beauty} alt="beauty" className="cat-img"/>
                        <p className="cat-p">Cuidado personal</p>
                    </div>
                </button>
                <button to="/" className="cat-link" onClick={(e) => {this.props.handleState(); this.props.handleCatSearchAuto()}}>
                    <div className="cat-elm-div">
                        <img src={auto} alt="automotive" className="cat-img"/>
                        <p className="cat-p">Automóvil</p>
                    </div>
                </button>
                <button to="/" className="cat-link" onClick={(e) => {this.props.handleState(); this.props.handleCatSearchOcio()}}>
                    <div className="cat-elm-div">
                        <img src={ocio} alt="leisure" className="cat-img"/>
                        <p className="cat-p">Ocio</p>
                    </div>
                </button>
                <button to="/" className="cat-link" onClick={(e) => {this.props.handleState(); this.props.handleCatSearchHealth()}}>
                    <div className="cat-elm-div">
                        <img src={health} alt="health" className="cat-img"/>
                        <p className="cat-p">Salud y bienestar</p>
                    </div>
                </button>
                <button to="/" className="cat-link" onClick={(e) => {this.props.handleState(); this.props.handleCatSearchGastro()}}>
                    <div className="cat-elm-div">
                        <img src={gastro} alt="gastro" className="cat-img"/>
                        <p className="cat-p">Comida y bedidas</p>
                    </div>
                </button>
                
                
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