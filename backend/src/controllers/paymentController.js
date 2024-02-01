const stripeSK = "sk_test_51NmuBaFM2JYZGY8Mpc1nMFSqHxbkzVYYtScpUYvElxrqoxXg40eIJlrmnQMl8XPgnaAm83wJqqGExhxXnO0Nh2Zj00CZSnWeVz"
const stripePaymentURI = "https://api.stripe.com/v1/payment_intents"
const stripe = require("stripe")(stripeSK);

const createPaymentIntent = async (req, res, next) => {
    const data = req.body
    console.log(data)
    const paymentData = {
        amount: data.amount * 100,
        currency: data.currency,
        payment_method: data.paymentMethodId,
        confirm: true,
        automatic_payment_methods: {
            enabled: true,
            allow_redirects: 'never'
        }
    };
    console.log("payment: " + JSON.stringify(paymentData));

    try{
        const paymentIntent = await stripe.paymentIntents.create(paymentData);
        if (paymentIntent.status === 'succeeded') {
            res.status(200).json({ paymentIntent })
        }
        else{
            res.status(400).json({error: "Payment failed!"})
        }
    }
    catch(error){
        if (error.type === 'StripeCardError') {
            res.status(400).json({error: error.message})
        }
        else{
            next(error);
        }
    }
}

module.exports = {
    createPaymentIntent
}