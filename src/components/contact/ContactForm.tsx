"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ErrorMessage from "./ErrorMessage";
import Toast from "../Toast";
import { Flip, toast } from "react-toastify";
import TextareaAutosize from "react-textarea-autosize";
import { cn } from "@/lib/utils";

type EmailTemplate = {
  to_name: string;
  from_name: string;
  reply_to: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function sendEmail(emailData: EmailTemplate) {
    const loadingToastId = toast.loading("Sending email");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        emailData,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 10000,
          },
        },
      )
      .then(
        () => {
          toast.update(loadingToastId, {
            type: "success",
            render: "Thank you for your message. I will get back to you soon!",
            isLoading: false,
            autoClose: null,
            closeButton: null,
            closeOnClick: null,
            transition: Flip,
          });

          reset();
        },
        (_error) => {
          toast.update(loadingToastId, {
            type: "error",
            render:
              "There was an error sending your message. Please try again later.",
            isLoading: false,
            autoClose: null,
            closeButton: null,
            closeOnClick: null,
            transition: Flip,
          });
        },
      );
  }

  async function onSubmit(data: FieldValues) {
    const emailData = {
      to_name: "Graydon",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    await sendEmail(emailData);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="hero-elements-fade-in flex w-full max-w-md flex-col items-center justify-center gap-4"
      >
        <input
          type="text"
          placeholder="name"
          {...register("name", {
            required: "This field is required.",
            maxLength: {
              value: 80,
              message: "Name cannot exceed 80 characters",
            },
          })}
          className={cn(
            "card w-full rounded-md p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400/50",
            {
              "outline outline-red-500 focus:ring-red-500":
                errors.name && errors.name.message,
            },
          )}
        />
        <ErrorMessage errors={errors} field="name" />
        <input
          type="email"
          placeholder="email"
          {...register("email", {
            required: "This field is required.",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Entered value does not match email format",
            },
          })}
          className={cn(
            "card w-full rounded-md p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400/50",
            {
              "outline outline-red-500 focus:ring-red-500":
                errors.email && errors.email.message,
            },
          )}
        />
        <ErrorMessage errors={errors} field="email" />
        <TextareaAutosize
          maxRows={16}
          placeholder="message"
          {...register("message", { required: "This field is required." })}
          className={cn(
            "card min-h-52 w-full rounded-md p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400/50",
            {
              "outline outline-red-500 focus:ring-red-500":
                errors.message && errors.message.message,
            },
          )}
        />
        <ErrorMessage errors={errors} field="message" />
        <input
          value="send"
          type="submit"
          className="cursor-pointer rounded-md border border-slate-400/30 bg-indigo-700 px-10 py-4 capitalize shadow-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-slate-400/50"
        />
      </form>
      <Toast />
    </>
  );
}
