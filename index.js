import express from "express";
const app = express();
import routes from "./src/router.js";
import connectionDB from "./src/connectDB.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
connectionDB();

// app.use(
//   cors({
//     origin: process.env.LOCAL_WEB,
//     optionsSuccessStatus: 200,
//   })
// );


app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const userAgent = req.get("User-Agent");
  console.log("---------------------------------------------");
  console.log(`Incoming request: ${req.method} ${req.url}`);
  console.log(`User-Agent: ${userAgent}`);
  console.log("---------------------------------------------");
  next();
});

// router
app.use("/api", routes);

app.listen(process.env.PORT, function () {
  console.log(`Your app is running at port ${process.env.PORT}`);
});
