const express = require('express')
const app = express()
const port = 5000
const multer = require ('multer');
const cors = require('cors');
app.use(cors());

const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
    cb(null,'public')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + '-'+ file.originalname  )
    }

});
const upload = multer({storage}).single('file')

app.post('/upload', (req, res) => {
  upload (req , res,(err)=>{
if(err){
    return res.status(500).json(err);
}
else{
    return res.status(200).send(req.file)

}
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})