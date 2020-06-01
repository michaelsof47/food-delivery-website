class EmailForm extends HTMLElement
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

    set clickEvent(event)
    {
        this._clickEvent = event;
        this.render();
    }

    get value()
    {
        return document.querySelector(".email-user");
    }

    checkVoucherEmail(value, email_input)
    {
        return new Promise((resolve,reject) =>
        {
            if(email_input !== "" && email_input !== null)
            {
                const value = "Terima kasih atas partisipasi anda untuk mengisi email di bawah ini, Mohon ditunggu 4-5 hari kedepan";
                resolve(value);
            }
            else
            {
                const value = "Gagal Masuk";
                reject(value);
            }
        })
    }

    render()
    {
        this.shadowDOM.innerHTML = 
        `
        <style>
            .email-form
            {
                display         : flex;
                flex-wrap       : wrap;
                margin-top      :-51px;
                margin-bottom   : 27px;
                justify-content : center;
            }
        
            .email-user
            {
                width           : 780px;
                height          : 69px;
                display         : flex;
                flex-wrap       : wrap;
                position        : static;
                border-radius   : 20px;
                justify-content : center;
                border-width    : medium;
                font-size       : 27px;
                color           : #000000;
                margin-top      : 20px;
            }
        
            .btn_email
            {
                font-size       : 2em;
                font-weight     : bold;
                border-radius   : 20px;
                margin-left     : 33px;
                margin-top      : 15px;
                margin-bottom   : 15px;
            }

            @media screen and (max-width:1100px)
            {
                .email-user
                {
                    width: 100%;
                    margin-left: 10px;
                    margin-right: 10px;
                }
            }

            @media screen and (max-width:600px)
            {
                .email-form
                {
                    margin-left     :  -12px;
                    margin-top      :  -134px;
                }

                .email-user
                {
                    width           : 91%;
                    margin-top      : 10px;
                    margin-bottom   : 10px;
                }

                .btn_email
                {
                    width           : auto;
                    margin-left     : -5px;
                    margin-top      : 10px;
                    margin-bottom   : 10px;
                }
                }
        </style>

        <div class="email-form">
            <input type="text" class="email-user" placeholder="Masukkan Email disini">
            <button type="submit" class="btn_email btn btn-success">Submit your Email</button>
        </div>`;

        this.shadowDOM.querySelector(".btn_email").addEventListener("click",this._clickEvent);
    }
}

customElements.define("email-form",EmailForm);