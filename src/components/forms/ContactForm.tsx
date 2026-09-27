"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import FormInput from "./FormInput";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: ContactFormData) => {
    setStatus("idle");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        reset();
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Unable to send message. Please call us directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please call us directly.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {status === "success" && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 text-sm">
          <p className="font-semibold">Message Sent Successfully!</p>
          <p className="mt-0.5 text-xs text-emerald-700">Thank you for reaching out. We will call you back shortly.</p>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800 text-sm">
          <p className="font-semibold">Could not send inquiry</p>
          <p className="mt-0.5 text-xs text-red-700">{errorMessage}</p>
        </div>
      )}

      <FormInput label="Full Name" {...register("name")} error={errors.name?.message} />
      <FormInput label="Phone" {...register("phone")} error={errors.phone?.message} />
      <FormInput label="Email" type="email" {...register("email")} error={errors.email?.message} />
      <FormInput label="Message" {...register("message")} error={errors.message?.message} as="textarea" />
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center !py-4 font-semibold text-white disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
