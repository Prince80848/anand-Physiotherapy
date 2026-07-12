import { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  as?: "input" | "textarea";
}

const FormInput = forwardRef<HTMLInputElement & HTMLTextAreaElement, Props>(
  ({ label, error, as = "input", ...props }, ref) => {
    const className =
      "w-full rounded-xl border border-[#ede5d8] bg-[#fdfcfa] px-4 py-3.5 text-sm transition-all focus:border-[#4a7d67] focus:outline-none focus:ring-2 focus:ring-[#4a7d67]/20 " +
      (error ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "");

    return (
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#555552]">
          {label}
        </label>
        {as === "textarea" ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            rows={4}
            className={className}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            className={className}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
export default FormInput;
