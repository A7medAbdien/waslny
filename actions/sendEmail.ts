"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // // testing server action
  // console.log("This is server side");
  // console.log(senderEmail);
  // console.log(message);

  // // testing resend api
  // await resend.emails.send({
  //   from: "Acme <onboarding@resend.dev>",
  //   to: "ahmed.g.abdien@gmail.com",
  //   subject: "Message to test",
  //   text: "Testing Resend API",
  // })

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ahmed.g.abdien@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
