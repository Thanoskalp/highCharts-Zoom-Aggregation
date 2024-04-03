
     const express = require('express');
     const app = express();
     const port = process.env.PORT || 8080;
     
     app.use(express.static('src'));
     
     app.listen(port, () => {
       console.log(`App listening at http://localhost:${port}`);
     });