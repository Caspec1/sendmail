import send from '../helpers/emails.js'

const sendMail = (req, res) => {
    const {name,  email, message} = req.body

    send({name, email, message})

    res.json({msg: 'Mensaje enviado'})
}

export {
    sendMail
}