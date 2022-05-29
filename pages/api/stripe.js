import Stripe from "stripe";

const Private_key = process.env.PRIVATE_STRIPE_TOKEN
const stripe = new Stripe(process.env.PRIVATE_STRIPE_TOKEN)

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body)
        try {
            const session = await stripe.checkout.sessions.create({
                line_items: req.body.map((item)=>{
                    const img = item.image[0].asset._ref
                    const newImage = img.replace('image-','https://cdn.sanity.io/images/dt7w2dxt/production/').replace('-webp','.webp')
                    return {
                        price_data:{
                            currency:'usd',
                            product_data:{
                                name:item.name,
                                images:[newImage]
                            },
                            unit_amount:item.price*100
                        },
                        adjustable_quantity:{
                            enabled:true,
                            minimum:1
                        },
                        quantity:item.quantity
                    }
                }),
                mode: 'payment',
                submit_type: 'pay',
                payment_method_types : ['card'],
                billing_address_collection: 'auto',
                shipping_options:[
                    {shipping_rate:'shr_1L42HELHdmbQBmKfQs4RS7JX'},
                    {shipping_rate:'shr_1L42GSLHdmbQBmKfMTzkrVqM'}
                ],
                success_url: `${req.headers.origin}/Success`,
                cancel_url: `${req.headers.origin}/canceled`,
            });
            res.status(200).json(session);
        } catch (error) {
            res.status(500).json({ statusCode: 500, err: error })
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}