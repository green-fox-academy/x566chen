const FETCHED_ARTICLE = 'FETCHED_ARTICLE'
const UP_SCORE = 'UP_SCORE'
const DOWN_SCORE = 'DOWN_SCORE'
const POST_ARTICLE = 'POST_ARTICLE'

function fetchArticleAction(){
    return async function(dispatch){
        const result = await fetch('http://localhost:3000/posts')
        const data = await result.json()
        dispatch({
            type: FETCHED_ARTICLE,
            article: data
        })
    }
}
function UpScoreAction(id){
    return async function(dispatch){
        const result = await fetch(`http://localhost:3000/posts/${id}/upvote`, {method: 'PUT', headers: { "Content-Type": "application/json" }})
        const data = await result.json()
        dispatch({
            type: UP_SCORE,
            upscore: data[id-1]
        })

    }
}
function DownScoreAction(id){
    return async function(dispatch){
        const result = await fetch(`http://localhost:3000/posts/${id}/downvote`, {method: 'PUT',headers: { "Content-Type": "application/json" }})
        const data = await result.json()
        dispatch({
            type: DOWN_SCORE,
            downscore: data[id-1]
        })
    }
}

function PostArticle(title, URL){
    return async function(dispatch){
        const result = await fetch('http://localhost:3000/posts',{
            method: 'POST',
            headers: { "Content-Type": "application/json" }, 
            body:JSON.stringify({title:title, url:URL})})
        const data = await result.json();
        console.log(data)

        
    }
}



export {
    fetchArticleAction,
    FETCHED_ARTICLE,
    UpScoreAction,
    UP_SCORE,
    DownScoreAction,
    DOWN_SCORE,
    PostArticle,
    POST_ARTICLE,
}