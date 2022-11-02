const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51LrWBVFvPtz9GovJSGNvTOJ849ywvbFHuvPkmJ0L2slCoTU5JZwkDjkg1e8frs3IbdJmbfl4BQkz1vLlApxBoZAj00o9AGKjvs')

//API

//-API Config
const app = express()

//-Middleweares
app.use(cors({origin:true}))
app.use(express.json())

//-API routes
app.get('/',(request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async(request,response)=>{
    const total = request.query.total

    console.log('payment request received for this amount>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency: 'usd'
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

//-liste
exports.api = functions.https.onRequest(app)