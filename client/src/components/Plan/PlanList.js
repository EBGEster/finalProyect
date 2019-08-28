import React, { Component } from 'react'
import Services from '../../services/plan.services'
//import SearchInput, {createFilter} from 'react-search-input'

import PlanCard from './PlanCard'
import CategoryModal from './CategoryModal';
import { Modal } from 'react-bootstrap'

//import Dialog from '@material-ui/core/Dialog';
//const KEYS_TO_FILTERS = ['category', 'title']

class PlanList extends Component {

    constructor() {
        super()
        this.state = { plans: [], showModal: false, searchTerm: '', name: "", plansCopy: [], catBtn: true, catSearch:"" }
        this.services = new Services()
        //this.searchUpdated = this.searchUpdated.bind(this)
    }

    componentDidMount = () => this.updateList()

    updateList = () => {
        this.services.getPlans()
            .then(response => this.setState({ plans: response.data, plansCopy:response.data }))
            .catch(err => console.log(err))
    }

    // searchUpdated (term) {
    //       this.setState({searchTerm: term})
    // }

    handleModalOpen = () => this.setState({ showModal: true })
    handleModalClose = () => this.setState({ showModal: false })

    filterProducts = (name) => {
        let copy = [...this.state.plansCopy]
        copy = copy.filter(plan => {
           
            if(!name && this.state.catSearch === "") {
                console.log("no hay nombre ni categoria")
                 return plan
             } else if(!name && this.state.catBtn !== "") {
                console.log("no hay nombre hay categoria")
                 console.log(this.state.catSearch)
                 return plan.category.includes(this.state.catSearch) 
             } else if(name && this.state.catSearch === ""){
                console.log("hay nombre no hay categoria")
                 return plan.title.toLowerCase().includes(name.toLowerCase())
             } else if(name && this.state.catBtn !== "") {
                 console.log("hay nombre hay categoria") 
                 return plan.title.toLowerCase().includes(name.toLowerCase()) && plan.category.includes("gastro") 
             }
            // if(!name && !this.state.catBtn) {
            //    console.log("no hay nombre ni categoria")
            //     return plan
            // } else if(!name && this.state.catBtn) {
            //    console.log("no hay nombre hay categoria")
            //     console.log(this.state.catSearch)
            //     return plan.category.includes(this.state.catSearch) 
            // } else if(name && !this.state.catBtn){
            //    console.log("hay nombre no hay categoria")
            //     return plan.title.toLowerCase().includes(name.toLowerCase())
            // } else if(name && this.state.catBtn) {
            //     console.log("hay nombre hay categoria") 
            //     return plan.title.toLowerCase().includes(name.toLowerCase()) && plan.category.includes("gastro") 
            // }

   
        })

        this.setState({ plans: copy })
    }

    handleState =  () => {
        
        this.setState({
            //catBtn: !this.state.catBtn
        }, () => this.filterProducts(this.state.name))
    }

    handleInput = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        this.setState({
            [name] : value
        }, () => this.filterProducts(this.state.name))
    }

    handleCatSearchBeauty = () => {this.setState({catSearch : "beauty"})}
    handleCatSearchAllPlans = () => {this.setState({catSearch : ""})}
    handleCatSearchAuto = () => {this.setState({catSearch : "automotive"})}
    handleCatSearchGastro = () => {this.setState({catSearch : "gastro"})}
    handleCatSearchOcio = () => {this.setState({catSearch : "leisure"})}
    handleCatSearchHealth = () => {this.setState({catSearch : "health-and-fitness"})}

    render() {
        console.log(this.state)
        // const filteredPlans = this.state.plans.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
  
        return (
            <>
            <div>

                <button className="btn btn-dark btn-big" onClick={this.handleModalOpen}>Buscar por categoría</button>
                <Modal show={this.state.showModal} onHide={this.handleModalClose} onClick={this.handleModalClose}>
                    <Modal.Body>
                <CategoryModal 
                    handleState={this.handleState}
                    handleCatSearchBeauty={this.handleCatSearchBeauty}
                    handleCatSearchAuto={this.handleCatSearchAuto}
                    handleCatSearchGastro={this.handleCatSearchGastro}
                    handleCatSearchOcio={this.handleCatSearchOcio}
                    handleCatSearchHealth={this.handleCatSearchHealth}
                    handleCatSearchAllPlans={this.handleCatSearchAllPlans}
                />
                 </Modal.Body>
                </Modal>
            </div>
            <br/>
            <div>        
             {/* <SearchInput className="search-input" onChange={this.searchUpdated} placeholder="Introduce tu búsqueda"/> */}
             <input className="search-input" name="name" value={this.state.name} onChange={this.handleInput}></input>
             
            </div>
                <div className="container">

                    
                    <h1>Planes</h1>

                    {/* {this.props.userInSession && <button className="btn btn-dark btn-big" onClick={this.handleModalOpen}>Nueva montaña rusa</button>} */}

                    <div className="row coasters-list">

                        {this.state.plans.map(plan => <PlanCard key={plan._id} {...plan} />)}
                        {/* {filteredPlans.map(plan => <PlanCard key={plan._id} {...plan} />)} */}

                    </div>
                </div>
            </>
        )
    }
}


export default PlanList