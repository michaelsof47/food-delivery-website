class joinComponent extends HTMLElement
{
    constructor()
    {
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback()
    {
        this.render();
    }

    render()
    {
        this.shadowDOM.innerHTML = 
        `
        <style>
            
            .card-join
            {
                display         : grid;
                grid-auto-flow  : column;
                justify-content : center;
            }

            .card-join-item
            {
                width           : 448px;
                height          : 454px;
                background-color: #ffffff;
                margin-left     : 80px;
                margin-right    : 80px;
                box-shadow      : 8px 8px #0A0000;
                display         : flex;
                flex-direction  : column;
            }

            .card-join-img
            {
                margin-left     : 22px;
                margin-right    : 22px;
                margin-top      : 30px;
            }

            .btn-join
            {
                background-color: darkolivegreen;
                color           : wheat;
                margin          : 40px 37px;
                font-size       : 2em;
                font-weight     : bold;
                border-radius   : 20px;
            }
            
            @media screen and (max-width:800px)
            {
                .card-join
                {
                    grid-auto-flow  : dense;
                    margin-top: -70px;
                }

                .card-join-item
                {
                    width           : 397px;
                    height          : 400px;
                    border-radius   : 10px;
                    margin-top      : 20px;
                    margin-left     : 10px;
                    margin-right    : 10px;
                }

                .card-join-img
                {
                    width           : 350px;
                    margin-left     : 25px;
                    margin-right    : 25px;
                }
            }
        </style>

        <div class="card-join">
            <div class="card-join-item">
                <img class="card-join-img" src="../assets/img_driver.png">
                <button type="button" class="btn-join">Driver</button>
            </div>
            <div class="card-join-item">
                <img class="card-join-img" src="../assets/img_merchant.png">
                <button type="button" class="btn-join">Merchant</button>
            </div>
        </div>
        `
    }
}

customElements.get('join-component') || customElements.define('join-component',joinComponent);