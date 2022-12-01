import nodemailer from 'nodemailer'

const sendMail = async (data) => {

    const {name, email, message} = data

    const transport = nodemailer.createTransport({
        pool: true,
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
        tls: {
          rejectUnauthorized: false
        }
        });
  
      const info = await transport.sendMail({
          from: 'Portafolio <contacto@javiermirandadev.com',
          to: 'mirandavillegasjavier@gmail.com',
          subject: `Nuevo mensaje de Portafolio ${name}`,
          text: 'Nuevo mensaje',
          html: `
              <h1>Nuevo mensaje de portafolio de ${name}</h1>
              
              <p>Correo: ${email}</p>

              <p>Mensaje: ${message}</p>
          `
      })
}

export default sendMail