const FETCHED_ARTICLE = 'FETCHED_ARTICLE'

function fetchArticleAction(){
    return async function(dispatch){
        const result = await fetch('http://localhost:3000/posts')
        const data = await result.json()
        dispatch({
            type: FETCHED_ARTICLE,
            title: data.title,
            score: data.score,
            url: data.url
        })
    }
}

export {
    fetchArticleAction,
    FETCHED_ARTICLE
}