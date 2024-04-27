
const PaymentService = require('../services/paymentService')
const PaymentController = require('../controler/paymentControler')

const paymentInstance = new PaymentController(new PaymentService())

exports.handler = async (event,context) => {

    try{
        const data = JSON.parse((event.body))
        const res = await paymentInstance.getPaymentLink(data)

        return{
            statusCode:200,
            body:JSON.stringify(res)
        }
    }
    catch(err){ 
        return{
            statusCode:400,
            body:JSON.stringify({err:err})
        }
    }
}