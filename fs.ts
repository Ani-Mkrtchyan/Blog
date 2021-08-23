const fs = require('fs');
let data :any = '';

const readerStream:any = fs.createReadStream('data/text.txt'); 
readerStream.setEncoding('UTF8'); 

readerStream.on('data', (chunk:any) => {
   data += chunk;
});

readerStream.on('end', ()=> {
   console.log(data);
});

readerStream.on('error', (err:Error) => {
   console.log(err.stack);
});


