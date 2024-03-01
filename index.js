const express = require('express');

const app = express();

app.get("/",(req,res)=>{

    res.status(200).json({
        msg:`dengey ra pukesh`
    })
});

app.listen(3000,()=>{
    console.log(`port started at 3000`);
})
