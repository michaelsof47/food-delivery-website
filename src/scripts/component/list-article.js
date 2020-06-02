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
        this._articles.forEach(article =>
            {
                const articleElementItem = document.createElement("list-article-item");
                articleElementItem.article = article;
                this.shadowDOM.appendChild(articleElementItem);
            })
    }
}

customElements.define("list-article",listArticle);