const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const db = require('../db/index')

const port = 3000

app.use(express.static('../client/dist'))
app.use(cors())
app.use(bodyParser())

app.post('/', (req, res) => {
    const personal = req.body.personal
    const shipping = req.body.shipping
    const payment = req.body.payment
    db.connection.query(`INSERT INTO personal (name, email, password) VALUES 
    ('${personal.name}', '${personal.email}', '${personal.password}');`, (err) => {
        if (err) {
            console.log(err)
            res.status(400).send()
        } else {
            console.log(`add personal:${personal} to db`)
            db.connection.query(`INSERT INTO shipping (line1, line2, city, state, zip, phone) VALUES 
            ('${shipping.line1}', '${shipping.line2}', '${shipping.city}','${shipping.state}','${shipping.zip}','${shipping.phone}');`, (err) => {
                if (err) {
                    console.log(err)
                    res.status(400).send()
                } else {
                    console.log(`add shipping:${shipping} to db`)
                    db.connection.query(`INSERT INTO payment (cardNumber, exp, cvv, billingzip) VALUES 
                    ('${payment.cardNumber}', '${payment.exp}', '${payment.cvv}','${payment.billingzip}');`, (err) => {
                        if (err) {
                            console.log(err)
                            res.status(400).send()
                        } else { 
                            console.log(`add payment:${payment} to db`)
                            res.status(201).send()
                        }
                    })
                }
            })
        }
    })
})

app.listen(port, () => console.log(`listening on port:${port}`))
