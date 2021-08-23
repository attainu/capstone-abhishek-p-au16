

exports.createNewOrder = (async (req,res,next) => {

    const { shippingDetails, orderedItems, itemsPrice, shippingPrice, taxPrice, 
     totalPrice, itemsPaymentInfo } = req.body;
 
     const order = await order.create({
         shippingDetails, orderedItems, itemsPrice, shippingPrice, taxPrice, 
         totalPrice, itemsPaymentInfo, user : req.user._id ,paidDate : Date.now()
     });
 
     res.status(200).json({
         sucess: true,
         message: "Order has placed",
         order
     });
    })