"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import FormInput from "@/components/forms/FormInput";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("contact_popup_shown");
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("contact_popup_shown", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        reset();
        setSubmitted(true);
      } else {
        setSubmitError(result.error || "Unable to send request. Please call us directly.");
      }
    } catch {
      setSubmitError("Network error. Please call us directly.");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setSubmitted(false);
    setSubmitError(null);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="cp-backdrop" onClick={handleClose} aria-hidden="true" />

      {/* Modal */}
      <div role="dialog" aria-modal="true" aria-labelledby="cp-heading" className="cp-modal">

        {/* Green Header */}
        <div className="cp-header">
          <div>
            <span className="cp-pill">✨ Free Consultation</span>
            <h2 id="cp-heading" className="cp-title">Book Your Appointment</h2>
            <p className="cp-subtitle">We&apos;ll call you back to confirm the slot.</p>
          </div>
          <button onClick={handleClose} aria-label="Close" className="cp-close">
            <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Body */}
        <div className="cp-body">
          {submitted ? (
            <div className="cp-success">
              <div className="cp-success-icon">
                <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" className="h-7 w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="cp-success-title">Message Sent!</h3>
              <p className="cp-success-text">
                Thank you! We&apos;ll call you back shortly to schedule your appointment.
              </p>
              <button onClick={handleClose} className="btn-primary w-full justify-center mt-2 text-white">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="cp-form" noValidate>
              {submitError && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-800">
                  <p className="font-semibold">Could not send request</p>
                  <p className="mt-0.5">{submitError}</p>
                </div>
              )}
              <div className="cp-form-row">
                <FormInput
                  label="Full Name"
                  placeholder="e.g. Rahul Kumar"
                  {...register("name")}
                  error={errors.name?.message}
                />
                <FormInput
                  label="Phone Number"
                  placeholder="+91 XXXXX XXXXX"
                  {...register("phone")}
                  error={errors.phone?.message}
                />
              </div>
              <FormInput
                label="Email (optional)"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
                error={errors.email?.message}
              />
              <FormInput
                label="How can we help?"
                {...register("message")}
                error={errors.message?.message}
                as="textarea"
                placeholder="Describe your pain or condition briefly..."
              />
              <button
                type="submit"
                id="popup-submit-btn"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center !py-3.5 font-semibold disabled:opacity-50 text-white"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Book Free Consultation \u2192"
                )}
              </button>
              <p className="cp-privacy">\uD83D\uDD12 Your information is 100% private and secure.</p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
