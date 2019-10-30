const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);

    const getID = reqUrl =>{
        const findID = reqUrl.pathname.split('/');
        //console.log(findID)
        if(findID[2]){
            return findID[2];
        }else{
            return undefined;
        }
    }

    const getGenre = reqUrl =>{
        return reqUrl.query.genre;
    }


    const movieID = getID(reqUrl);
    const genre = getGenre(reqUrl);



    // GET Endpoint
    // if (reqUrl.pathname == '/movies' && req.method === 'GET') {
    //     console.log('Request Type:' +
    //         req.method + ' Endpoint: ' +
    //         reqUrl.pathname);

    //     service.sampleRequest(req, res);
    // }

    if (movieID === undefined) {
        if(req.method === 'GET') {
            service.getMovie(genre, res)
            return
        } else if (req.method === 'POST'){
            service.postMovie(req,res)
            return
        }
    }else {
        if (req.method === 'GET'){
            service.getMovieID(movieID, res)
            return
        }else if(req.method === 'DELETE'){
            service.deleteMovieID(movieID, req, res)
            return
        }else if(req.method === 'PUT'){
            service.postMovieID(movieID, req, res)
            return
        }
    }


});