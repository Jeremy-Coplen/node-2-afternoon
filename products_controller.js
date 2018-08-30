module.exports = {
    create: (req, res, next) => {
        const db = req.app.get("db")
        const product = req.body

        db.create_product(product)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Yikes something went Wrong. we'll fix it asap"})
            console.log(err)
        })
    },

    getOne: (req, res, next) => {
        const db = req.app.get("db")
        const{params} = req
        console.log(params.id)

        db.read_product({product_id: params.id})
        .then(product => res.status(200).send(product))
        .catch(err => {
            res.status(500).send({errorMessage: "Yikes something went Wrong. We'll fix it asap"})
            console.log(err)
        })
    },

    getAll: (req, res, next) => {
        const db = req.app.get("db")

        db.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: "Yikes something went Wrong. We'll fix it asap"})
            console.log(err)
        })
    },

    update: (req, res, next) => {
        const db = req.app.get("db")
        const {params, query} = req

        db.update_product({product_id: params.id, description: query.desc})
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Yikes something went Wrong. We'll fix it asap"})
            console.log(err)
        })
    },

    delete: (req, res, next) => {
        const db = req.app.get("db")

        db.delete_product({product_id: req.params.id})
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Yikes something went Wrong. We'll fix it asap"})
            console.log(err)
        })
    }
}