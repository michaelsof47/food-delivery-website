import "./list-article-item.js";

class listArticle extends HTMLElement
{
    constructor()
    {
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    set articles(articles)
    {
        this._articles = articles;
        this.render();
    }

    render()
    {
        this.shadowDOM.innerHTML =
        `
        <style>
            list-article-item
            {
                margin-left : 10px;
                margin-right: 10px;
            }
            
            @media screen and (max-witdth:800px)
            {
                list-article-item
                {
                    margin-top : 31px;
                }
            }
        </style>
        `

        this._articles.forEach(article =>
            {
                const articleElementItem = document.createElement("list-article-item");
                articleElementItem.article = article;
                this.shadowDOM.appendChild(articleElementItem);
            })
    }
}

customElements.get('list-article') || customElements.define('list-article',listArticle);