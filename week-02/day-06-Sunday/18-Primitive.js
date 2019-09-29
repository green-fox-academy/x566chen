function primitive({ ...params }) {
    let result = []
    for (let [key, value] of Object.entries(params)) {
      if (typeof value !== 'object') {
        result.push(key)
      }
    }
  
    return result;
  }
  
  console.log(primitive({ x: 1, y: true, z: [] }))