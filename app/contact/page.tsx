// app/contact/page.tsx
"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldDescription,
} from "@/components/ui/field";
import { Reveal } from "@/components/common/Reveal";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more about your project"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: values.name,
          email: values.email,
          company: values.company || "—",
          budget: values.budget || "—",
          message: values.message,
          time: new Date().toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
          title: `New contact from ${values.name}`,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
      );
      reset();
      alert("Thanks — we'll be in touch within one business day.");
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <main className="bg-bg">
      <section className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
        <Reveal variant="fadeUp">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Contact
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Let&apos;s build something great together
            </h1>
            <p className="mt-4 text-lg text-muted">
              Tell us about your project, and we&apos;ll get back to you within
              one business day.
            </p>
          </div>
        </Reveal>

        {/* Form + contact info */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Form */}
          <Reveal variant="slideRight" className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Full name</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        placeholder="Jane Doe"
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Work email</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        type="email"
                        placeholder="jane@company.com"
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Controller
                  name="company"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Company (optional)
                      </FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        placeholder="Company name"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="budget"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Estimated budget (optional)
                      </FieldLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger id={field.name}>
                          <SelectValue placeholder="Select a range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10k</SelectItem>
                          <SelectItem value="10k-50k">$10k – $50k</SelectItem>
                          <SelectItem value="50k-150k">$50k – $150k</SelectItem>
                          <SelectItem value="150k-plus">$150k+</SelectItem>
                        </SelectContent>
                      </Select>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>

              <Controller
                name="message"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>
                      Tell us about your project
                    </FieldLabel>
                    <Textarea
                      {...field}
                      id={field.name}
                      placeholder="What are you looking to build?"
                      className="min-h-[140px]"
                      aria-invalid={fieldState.invalid}
                    />
                    <FieldDescription>
                      The more detail you share, the faster we can respond.
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="gap-2 rounded-full bg-accent px-8 text-accent-fg hover:bg-accent/90"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight className="size-4" />
              </Button>
            </form>
          </Reveal>

          {/* Contact info + map */}
          <Reveal variant="slideLeft" delay={0.15} className="lg:col-span-2">
            <div className="space-y-6 rounded-2xl border border-border bg-white p-8">
              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 size-5 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <a
                    href="mailto:hello@msule.com"
                    className="text-sm text-muted hover:text-accent"
                  >
                    hello@msule.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 size-5 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-ink">Phone</p>
                  <a
                    href="tel:+10000000000"
                    className="text-sm text-muted hover:text-accent"
                  >
                    +1 (000) 000-0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 size-5 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-ink">Office</p>
                  <p className="text-sm text-muted">
                    123 Business Ave, Suite 100
                    <br />
                    City, State 00000
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Msule office location"
                src="https://www.google.com/maps?q=New+York,NY&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Scheduling — own full-width section, given proper room */}
      <section className="border-t border-border bg-white py-20">
        <Reveal
          variant="zoomIn"
          className="mx-auto max-w-[700px] px-6 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Prefer to talk live?
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
            Schedule a call
          </h2>
          <p className="mt-3 text-muted">
            Pick a time that works for you — no back-and-forth emails needed.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Ro_Fg02JIyAyFpug-9p2SXN8sk6d-KTZJQ241-skCbCTkir5_IRe6AxaH8b-3tbE9XFINS6SC?gv=true"
              className="h-[500px] w-full"
              style={{ border: 0 }}
              title="Schedule a meeting with Msule"
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
