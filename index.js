require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const massive = require("massive")
const pc = require("./products_controller")

const app = express()
app.use(bodyParser.json())
const port = process.env.PORT || 3000

app.get("/api/products", pc.getAll)
app.get("/api/product/:id", pc.getOne)
app.put("/api/product/:id", pc.update)
app.post("/api/product", pc.create)
app.delete("/api/product/:id", pc.delete)

massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db)
    app.listen(port, () => console.log(`server started on port ${port}`))
}).catch(err => console.log(err))