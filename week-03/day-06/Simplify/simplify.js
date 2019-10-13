
const myGetHttp = (url) => {
    return new Promise((resolve, reject) => {
      resolve(`This is a dummy HTTP response for GET ${url}`);
    });
  };
  
  const myParser = (string) => {
    return new Promise((resolve, reject) => {
      resolve(`This is the parsed response: ${string}`);
    }); 
  }
  
  const myDbSaver = (dataToSave) => {
    return new Promise((resolve, reject) => {
      resolve(`This data is saved: ${dataToSave}`);
    });
  }
  
  const notifyUser = (message) => {
    return new Promise((resolve, reject) => {
      resolve(`User is notified about this: ${message}`);
    });
  }
  
  async function promiseHell(){
    try{
        const response = await myGetHttp('http://api.something.com/do');
        console.log('Got HTTP response');
        try{
            const parsed = await myParser(response);
            console.log('Got parsed HTTP response'); 
            try{
                const message = await myDbSaver(parsed)
                console.log('Response is saved in the DB');
                    try {
                        console.log(await notifyUser(message));
                    }catch(error){
                        console.log('Something bad happened', error);
                    }
            }catch(error){
                console.log('Something bad happened', error);
            };
        }catch(error){
            console.log('Something bad happened', error);
        };
    }catch(error){
        console.log('Something bad happened', error);
    };
}
  
  callbackHell();
