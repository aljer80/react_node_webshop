const stripePaymentURI = "https://api.stripe.com/v1/payment_intents"
const stripe= require("stripe")(STRIPE_SK);

async function createPaymentRequest(req, res, next) {
    const data = req.body
    try {
        const response = await stripe.paymentIntents.create({
            amount: data.amount*100,
            currency: data.currency,
            payment_method: data.paymentMethod,
            confirm: true
            })
        
        res.status(200).json(response);
    } catch (error) {
        next(error)
    }
}

module.exports = { 
    createPaymentRequest
}