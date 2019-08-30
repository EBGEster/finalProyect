import React, {Component} from 'react'

import '../styles/CommentCard.css'

class CommentCard extends Component{

    constructor() {
        super()
        this.state = {
            rate: undefined,
            comment: ""
        }
    }    

    render() {
        return(
        <form class="contact100-form validate-form">
            <div class="wrap-input100 validate-input">
            <input id="phone" class="input100" type="text" name="phone" placeholder="Eg. +1 800 000000"/>
            <span class="focus-input100"></span>
            <label class="label-input100" for="phone">
                <span class="lnr lnr-smartphone m-b-2"></span>
            </label>
        </div>


        <div class="wrap-input100 validate-input">
            <textarea id="message" class="input100" name="message" placeholder="Introduce tu comentario..."></textarea>
            <span class="focus-input100"></span>
            <label class="label-input100 rs1" for="message">
                <span class="lnr lnr-bubble"></span>
            </label>
        </div>

        <div class="container-contact100-form-btn">
            <button class="contact100-form-btn">
                Enviar
            </button>
        </div>
    </form>
        )
    }
}

export default CommentCard