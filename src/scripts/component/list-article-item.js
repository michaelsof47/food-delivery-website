class listArticleItem extends HTMLElement
{
    constructor()
    {
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    set article(article)
    {
        this._article = article;
        this.render();
    }

    render()
    {
        this.shadowDOM.innerHTML = 
        `
            <style>

                .article-card
                {
                    width           : 324px;
                    height          : 391px;
                    background-color: #FFA200;
                    box-shadow      : 8px 8px #0A0000;
                    border-radius   : 20px;
                }
            
                .card-item-image
                {
                    width           : 290px;
                    margin-left     : 18px;
                    margin-right    : 18px;
                    margin-top      : 20px;
                }
            
                .card-item-detail
                {
                    font-weight: bold;
                    font-size: 2.5em;
                    margin-top: 19px;
                    text-align: center;
                }

                @media screen and (max-width: 800px)
                {
                    .article-card
                    {
                        width           : 280px;
                        height          : 330px;
                        margin-top      : 20px;
                    }

                    .card-item-image
                    {
                        width           : 242px;
                    }

                    .card-item-detail
                    {
                        font-size: 1.8em;
                    }
                }
            </style>
            <div class="article-card">
                <img class="card-item-image" id="card-image" src="${this._article.strCategoryThumb}">
                <p class="card-item-detail">${this._article.strCategory}</p>
            </div>
        `;
    }
}

customElements.get('list-article-item') || customElements.define('list-article-item',listArticleItem);