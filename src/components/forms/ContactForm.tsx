"use client";
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

  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      reset();
      alert("Message sent! We will get back to you soon.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
