/**
 * Stripe secret key used for authentication.
 * @type {string}
 */
const stripeSK = "sk_test_51NmuBaFM2JYZGY8Mpc1nMFSqHxbkzVYYtScpUYvElxrqoxXg40eIJlrmnQMl8XPgnaAm83wJqqGExhxXnO0Nh2Zj00CZSnWeVz";
/**
 * URI for making payment intents requests to the Stripe API.
 * @type {string}
 */
const stripePaymentURI = "https://api.stripe.com/v1/payment_intents";
/**
 * Stripe object initialized with the secret key for making requests to the Stripe API.
 */
const stripe = require("stripe")(stripeSK);
/**
 * Creates a payment intent using the Stripe API.
 * @param {Request} req - The HTTP request object containing the payment data.
 * @param {Response} res - The HTTP response object for sending the payment intent.
 * @param {NextFunction} next - The next function to execute in the middleware chain.
 * @returns {Promise<void>} - A promise representing the completion of the operation.
 */
const createPaymentIntent = async (req, res, next) => {
    const data = req.body

    try{
        const paymentIntent = await stripe.paymentIntents.create({
            amount: data.amount * 100,
            currency: data.currency,
            payment_method: data.paymentMethod,
            confirm: true
        });
    
        res.status(200).json({ paymentIntent });    
    }
    catch(error){
        next(error);
    }
}

module.exports = {
    createPaymentIntent
}