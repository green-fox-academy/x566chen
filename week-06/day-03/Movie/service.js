const url = require('url');

let movieLibrary =[
    {
      "id": 12,
      "title": "Forrest Gump",
      "genre": "drama"
    },
    {
      "id": 23,
      "name": "Mission Impossible 18",
      "genre": "action"
    },
  ]

exports.getMovie = function (genre, res) {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    if (genre) {
        const filtermovie = movieLibrary.filter(movie => movie.genre === genre)
        res.end(JSON.stringify(filtermovie))
        return
    }
    res.end(JSON.stringify(movieLibrary))
};

exports.postMovie = function (req, res) {
    let movieID = undefined;
    let movieName = undefined;
    let movieGenre = undefined;

    req.on('data', function(chunk){
        const postInfo = JSON.parse(chunk)
        movieID = postInfo.id
        movieName = postInfo.name
        movieGenre = postInfo.genre
    })

    req.on('end', function(){
        const include = movieLibrary.some(movie =>movie.name === movieName)
        if (!movieName || !movieID){
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Sry, we cannot find...')
        }
        if (include){
            res.statusCode = 409
            res.setHeader('Content-Type', 'application/json');
            res.end(`there is ${movieName}`)
            return
        }

        movieLibrary.push({
            id: movieID,
            name: movieName,
            genre: movieGenre
        })

        res.statusCode=201
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(movieLibrary))
        return
    })
}

exports.getMovieID = function (movieID, res) {
    const filtermovie = movieLibrary.find(movie => movie.id === parseInt(movieID))
    if(filtermovie) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(filtermovie))
        return
    }
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Sry, we cannot find...')
}

exports.deleteMovieID = function(movieID, req, res) {
    const Length = movieLibrary.length
    movieLibrary = movieLibrary.filter(movie => movie.id !== movieID)
    // console.log(Length)
    console.log(MovieLibrary.length)
     if (Length === movieLibrary.length){
         res.statusCode = 404
         res.setHeader('Content-Type', 'text/plain')
         res.end(`There is no ${movieID}`)
         return
     }
    res.statusCode = 204
    res.end(JSON.stringify(movieLibrary))
    return
}

exports.postMovie = function(req, res){
    let movieID = undefined
    let movieName = undefined
    let movieGenre = undefined

    req.on('data', function(chunk){
        const postInfo = JSON.parse(chunk)
        movieID = postInfo.id
        movieName = postInfo.name
        movieGenre = postInfo.genre
    })

    req.on('end', function(){
        
        if (!movieName||!movieID) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'text/plain')
            res.end('There is nothing')
            return
        }

        if(movieLibrary.some(movie => movie.name === movieName || movie.id === movieID)){
            res.statusCode = 409
            res.setHeader('Content-Type', 'text/plain')
            res.end(`${movieName} is included!`)
            return
        }

        movieLibrary.push({
            id: movieID,
            name: movieName,
            genre: movieGenre
        })
        res.statusCode = 201
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(movieLibrary))
        return
    })
}


exports.postMovieID = function (movieId, req, res){
    let movieID = undefined
    let movieName = undefined
    let movieGenre = undefined

    req.on('data', function(chunk){
        const postInfo = JSON.parse(chunk)
        movieID = postInfo.id
        movieName = postInfo.name
        movieGenre = postInfo.genre
    })

    req.on('end', function(){
        if (!movieName || !movieID || !movieGenre) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'text/plain')
            res.end('There is nothing')
            return
          }
          if(!movieLibrary.some(movie => movie.name === movieName || movie.id === movieID)){
            res.statusCode = 404
            res.setHeader('Content-Type', 'text/plain')
            res.end(`There is no ${movieId}`)
            return
          }
          if (movieId !== movieID) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'text/plain')
            res.end(`Something error`)
            return
          }
          movieLibrary = movieLibrary.filter(movie => movie.id !== movieId)
          movieLibrary.push({
              id: movieID,
              name: movieName,
              genre: movieGenre,
          })
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(movieLibrary))
          return




    })


}

