const fakeExpress = require('./fake-express');
const PORT = 3000;

const app = fakeExpress();

app.listen(PORT, _ => console.log(`App is running on ${PORT}`))