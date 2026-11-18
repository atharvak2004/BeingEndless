export const site = {
  name: "Being Endless",
  url: "https://www.beingendless.com",
  tagline:
    "We help you reconnect with your true self, find clarity and balance, and create a calmer, more fulfilling life in a safe and supportive environment.",
  email: "contactbeingendless@gmail.com",
  phone: "+91-9873559619",
  phoneHref: "tel:+919873559619",
  location: "Gurugram Haryana",
  socials: {
    youtube: "https://youtube.com/@connect_beingendless?si=gqSX7TALOEMX1bHK",
    instagram:
      "https://www.instagram.com/connect_beingendless?igsh=cnFlOTJ1cmFhYjlk&utm_source=qr",
    whatsapp: "https://wa.me/919873559619",
  },
  verification: {
    google: "3ZiQFnhyvDhBTSqL2mXZouXDA-_M-oVHViZqGX0AT9M",
    bing: "4B926F5EBC3079889D6F738E0FA54B58",
  },
} as const;

export type NavItem = { label: string; href?: string; children?: NavItem[] };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-3" },
  {
    label: "Mental Wellness",
    href: "/mental-wellness",
    children: [
      { label: "Stress & Anxiety Management", href: "/mentalprograms/stress-%26-anxiety-management" },
      { label: "Anxiety Counselling", href: "/mentalprograms/anxiety-counselling" },
      { label: "ADHD", href: "/mentalprograms/adhd" },
      { label: "OCD", href: "/mentalprograms/ocd" },
      { label: "Depression Counselling", href: "/mentalprograms/depression-counselling" },
    ],
  },
  {
    label: "Counselling Program",
    href: "/counselling-services",
    children: [
      { label: "Individual Counselling", href: "/counselling-program/individual-counselling" },
      { label: "Family Counselling", href: "/counselling-program/family-counselling" },
      { label: "⁠Group Counselling", href: "/counselling-program/%E2%81%A0group-counselling" },
      { label: "Couples and Marital Counselling", href: "/counselling-program/couples-and-marital-counselling" },
      {
        label: "Couple and Marital Relationship Counselling",
        href: "/counselling-program/couple-and-marital-relationship-counselling",
      },
      {
        label: "Queer (LGBTQ+) affirmative counselling",
        href: "/counselling-program/queer-(lgbtq%2B)-affirmative-counselling",
      },
    ],
  },
  {
    label: "Self help Podcasts",
    children: [
      { label: "Sukoon Stories", href: "/general-1-2" },
      { label: "Roots and Rising", href: "/podcast" },
    ],
  },
  { label: "Blogs", href: "/blog" },
  { label: "How it Works", href: "/general-clean" },
];

export const footerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-3" },
  { label: "Counselling Programs", href: "/counselling-services" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/coming-soon-01" },
];
