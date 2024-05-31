require("dotenv/config");
const { MailerSend, EmailParams, Sender, Recipient } = require("mailersend");

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    // Configura el remitente y los destinatarios
    const sentFrom = new Sender(
      "NoReply@trial-z86org8o36k4ew13.mlsender.net",
      "Explora Natura confirmation"
    );
    const recipients = [
      new Recipient(result.email, result.username), // Asumiendo que el email y el username son atributos del usuario
    ];
    const personalization = [
      {
        email: `${result.email}`,
        data: {
          name: `${result.name}`,
          account_name: `${result.username}`,
        },
      },
    ];
    // Configura los parámetros del correo electrónico

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject("Thank you for registering in our beta")
      .setTemplateId("351ndgww8j5gzqx8") // Usa el ID de la plantilla que configuraste en MailerSend
      .setPersonalization(personalization);

    // Envía el correo electrónico
    try {
      await mailerSend.email.send(emailParams);
      console.log("Welcome email sent successfully.");
    } catch (error) {
      console.error("Error sending welcome email:", error);
    }
  },
};