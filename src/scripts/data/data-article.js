class dataArticle
{
    static getArticle()
    {
        const baseUrl = "https://www.themealdb.com/api/json/v1/1/";
        return fetch(`${baseUrl}/categories.php`)
            .then(response =>
                {
                    return response.json();
                }
                )
            .then(responseJson =>
                {
                    if(responseJson.categories)
                    {
                        return Promise.resolve(responseJson.categories);
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