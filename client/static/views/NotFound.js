import AbstractView from "./AbstractView.js";

export default  class NotFound extends AbstractView{
    constructor(){
        super();
        this.setTitle("404 NOT FOUND");
        this.setBackLink();
    }

    async getHtml(){
        return(
            `<h1>404 NOT FOUND π’</h1>
            <p>μμ²­νμ  νμ΄μ§λ₯Ό μ°Ύμ μ μμ΅λλ€.</p>
            <button id="NotFoundBtn" data-link="/">λ©μΈ νμ΄μ§λ‘ λμκ°κΈ°</button>`
        )
    }
}