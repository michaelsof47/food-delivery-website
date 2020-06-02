class dataArticle
{
    static getArticle()
    {
        const baseUrl = "https://www.themealdb.com/api/json/v1/1/";
        fetch(`${baseUrl}/categories.php`)
            .then(response =>
                {
                    return response.json();
                }
                )
            .then(responseJson =>
                {
                    if(responseJson.articles)
                    {
                        return Promise.resolve(responseJson.articles);
                    }
                    else
                    {
                        return Promise.reject(message_value);
                    }
                })
            .catch(error =>
                {
                    alert(error);
                })
    }
}

export default dataArticle;