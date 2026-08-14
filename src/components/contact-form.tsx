"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { serviceOptions } from "@/data/site";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

const formSubmitEndpoint = "https://formsubmit.co/ajax/digitalgeni65@gmail.com";

const budgets = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $7,500",
  "$7,500+",
  "Not sure yet",
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-2 text-sm text-red-300">{message}</p>;
}

async function sendToFormSubmit(values: ContactFormValues) {
  const formData = new FormData();

  formData.append("_subject", `New consultation request from ${values.fullName}`);
  formData.append("_template", "table");
  formData.append("_captcha", "false");
  formData.append("Full Name", values.fullName);
  formData.append("Email", values.email);
  formData.append("_replyto", values.email);
  formData.append("Phone", values.phone);
  formData.append("Company", values.company || "Not provided");
  formData.append("Service", values.service);
  formData.append("Budget", values.budget);
  formData.append("Message", values.message);

  const response = await fetch(formSubmitEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("FormSubmit request failed.");
  }
}

const inputClass =
  "focus-ring min-h-12 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white placeholder:text-slate-500 transition focus:border-cyan-300/50";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      consent: false,
      website: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    startTransition(async () => {
      try {
        await sendToFormSubmit(values);
        toast.success("Thanks. Your consultation request has been sent.");
        reset();
        return;
      } catch {
        toast.error(
          "The message could not be sent right now. Please email digitalgeni65@gmail.com directly.",
        );
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass rounded-[2rem] p-6 sm:p-8"
      noValidate
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-slate-200"
          >
            Full Name
          </label>
          <input
            id="fullName"
            className={inputClass}
            placeholder="Your name"
            {...register("fullName")}
          />
          <FieldError message={errors.fullName?.message} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-slate-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            placeholder="you@example.com"
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-slate-200">
            Phone Number
          </label>
          <input
            id="phone"
            className={inputClass}
            placeholder="+977 ..."
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>
        <div>
          <label
            htmlFor="company"
            className="text-sm font-medium text-slate-200"
          >
            Company Name
          </label>
          <input
            id="company"
            className={inputClass}
            placeholder="Company or brand"
            {...register("company")}
          />
          <FieldError message={errors.company?.message} />
        </div>
        <div>
          <label
            htmlFor="service"
            className="text-sm font-medium text-slate-200"
          >
            Service Interested In
          </label>
          <select
            id="service"
            className={cn(inputClass, "appearance-none")}
            {...register("service")}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <FieldError message={errors.service?.message} />
        </div>
        <div>
          <label
            htmlFor="budget"
            className="text-sm font-medium text-slate-200"
          >
            Project Budget
          </label>
          <select
            id="budget"
            className={cn(inputClass, "appearance-none")}
            {...register("budget")}
          >
            <option value="">Select budget</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
          <FieldError message={errors.budget?.message} />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-slate-200">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          className={cn(inputClass, "py-4")}
          placeholder="Tell us about your goals, current challenges, and timeline."
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>
      <label className="mt-5 flex items-start gap-3 text-sm text-slate-300">
        <input
          type="checkbox"
          className="focus-ring mt-1 h-4 w-4 rounded border-white/20 bg-slate-950 text-cyan-300"
          {...register("consent")}
        />
        <span>I agree to be contacted.</span>
      </label>
      <FieldError message={errors.consent?.message} />
      <Button type="submit" className="mt-7 w-full" disabled={isPending}>
        {isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {isPending ? "Sending..." : "Book Consultation"}
      </Button>
    </form>
  );
}
