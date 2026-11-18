import { ConsultationForm } from "@/components/ConsultationForm";
import { seo } from "@/lib/seo";

export const metadata = seo({
  title: "Book an Online Counselling Consultation | Being Endless",
  description:
    "Request a personal consultation with Being Endless for online counselling, mental wellness support, anxiety counselling, depression counselling, relationship concerns, personal growth, and LGBTQ-affirmative counselling. Take the first step toward emotional wellbeing, self-discovery, and positive change.",
  path: "/contact-8",
});

export default function ConsultationPage() {
  return (
    <section className="bg-mist py-14 sm:py-20">
      <div className="container-site max-w-[820px]">
        <div className="border border-line bg-white px-5 py-10 sm:px-12 sm:py-14">
          <h1 className="font-serif text-[30px] leading-tight sm:text-[38px]">Personal Consultation Request</h1>
          <p className="mt-3 text-[15px] text-ink-soft">Book Your First Free 20-Minute Discovery Session</p>
          <div className="mt-10">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
