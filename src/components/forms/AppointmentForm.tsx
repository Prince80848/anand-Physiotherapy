"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema, type AppointmentFormData } from "@/lib/validations";
import FormInput from "./FormInput";

import { services } from "@/data/services";

export default function AppointmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      reset();
      alert("Thank you! We will contact you shortly.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormInput label="Full Name" {...register("name")} error={errors.name?.message} />
      <FormInput label="Phone Number" {...register("phone")} error={errors.phone?.message} />
      <FormInput label="Email Address" type="email" {...register("email")} error={errors.email?.message} />
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#555552] mb-1.5">
          Service Required
        </label>
        <select
          {...register("service")}
          className="w-full rounded-xl border border-[#ede5d8] bg-[#fdfcfa] px-4 py-3.5 text-sm transition-all focus:border-[#4a7d67] focus:outline-none focus:ring-2 focus:ring-[#4a7d67]/20"
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>
        )}
      </div>
      <FormInput
        label="Message (optional)"
        {...register("message")}
        error={errors.message?.message}
        as="textarea"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center !py-4 font-semibold text-white disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Book Appointment"}
      </button>
    </form>
  );
}
