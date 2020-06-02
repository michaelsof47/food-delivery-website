class featureComponent extends HTMLElement
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
            .feature-row
            {
                width           : auto;
                display         : grid;
                grid-auto-flow  : column;
                position        : unset;
                justify-content : center;
                margin-top      : 4px;
                margin-left     : -58px;
            }
        
            .feature-row>.feature-card
            {
                width           : 317px;
                height          : 329px;
                background-color: #ffffff;
                box-shadow      : 8px 8px#0A0000;
                border-radius   : 10px;
                margin-left     : 40px;
            }
        
            .feature-card>.feature-image
            {
                width           : 188px;
                height          : 188px;
                display         : flex;
                margin-left     : 58px;
                margin-top      : 26px;
            }
        
            .feature-card>.feature-desc
            {
                font-size       : 1.8em;
                font-weight     : bold;
                width           : auto;
                text-align      : center;
                margin-left     : 30px;
                margin-right    : 30px;
            }

            @media screen and (max-width:1300px)
            {
                .feature-row
                {
                    display         : grid;
                    grid-auto-flow  : column;
                    margin-top      : 15px;
                    justify-content : space-evenly;
                    margin-left     : 0px;
                }

                .feature-row>.feature-card
                {
                    width       : 277px;
                    height      : 321px;
                    margin-left : 0px ;
                    margin-top  : 20px;
                }

                .feature-card>.feature-image
                {
                    margin-left : 44px;
                }
            }

            @media screen and (max-width:800px)
            {
                .feature-row
                {
                    display         : grid;
                    grid-auto-flow  : dense;
                    padding-left    : 0px;
                    padding-right   : 45px;
                    justify-content : center;
                    margin-left     : 85px;
                }

                .feature-card
                {
                    margin-top      : 40px;
                }

                .feature-row>.feature-card
                {
                    height          : 340px;
                }
            }
        </style>

        <article class="feature-row">
            <div class="feature-card">
                <img class="feature-image" src="/assets/ic_feature_1.png">
                <h3 class="feature-desc">Makanan Tetap Aman Disajikan</h3>
            </div>
            <div class="feature-card">
                <img class="feature-image" src="/assets/ic_feature_2.png">
                <h3 class="feature-desc">Pengiriman Tepat Waktu</h3>
            </div>
            <div class="feature-card">
                <img class="feature-image" src="/assets/ic_feature_3.png">
                <h3 class="feature-desc">Garansi Uang Kembali 100%</h3>
            </div>
        </article>
        `   
    }
}

customElements.define("feature-component",featureComponent);