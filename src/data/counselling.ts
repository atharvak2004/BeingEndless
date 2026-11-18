/** Counselling Programs (/counselling-services and /counselling-program/[slug]). Copy is verbatim from the live site. */

export type ContentSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  after?: string[];
};

export type CounsellingProgram = {
  /** decoded slug as it appears in the URL path */
  slug: string;
  /** URL-encoded path exactly as linked on the live site */
  path: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  sections: ContentSection[];
};

export const counsellingPrograms: CounsellingProgram[] = [
  {
    slug: "individual-counselling",
    path: "/counselling-program/individual-counselling",
    title: "Individual Counselling",
    summary:
      "Individual counselling offers a safe and confidential space to explore emotions, gain self-awareness, and work towards positive personal growth and well-being.",
    image: "/images/counselling-individual.png",
    imageAlt: "Individual Counselling.png",
    sections: [
      {
        heading: "Individual Counselling",
        paragraphs: [
          "Individual counselling provides a safe, supportive, and confidential environment where individuals can explore and work through emotions such as isolation, sadness, shame, powerlessness, anger, and many other feelings that are a natural part of the human experience. It is a one-on-one therapeutic process in which the therapist helps individuals gain a deeper understanding of themselves and their relationships with others, set personal goals, and work towards meaningful changes that promote a healthier and happier life.",
        ],
      },
      {
        heading: "Signs That You May Benefit from Individual Counselling",
        paragraphs: ["Some concerns and experiences for which individuals may seek counselling include:"],
        list: [
          "Difficulty falling asleep",
          "Nightmares",
          "Anxiety",
          "Depression",
          "Panic attacks",
          "Distressing or painful thoughts",
          "Persistent feelings of fear and worry",
          "Difficulty communicating or expressing emotions",
          "Adverse Childhood Experiences (ACEs)",
          "Social pressures and expectations",
          "Lack of family support or involvement",
        ],
      },
      {
        heading: "How We Help",
        paragraphs: [
          "At Being Endless, our therapists work collaboratively with individuals to understand and address the underlying causes of their concerns. Using evidence-based approaches such as Cognitive Behavioural Therapy (CBT), Rational Emotive Behaviour Therapy (REBT), Transactional Analysis, and other psychodynamic theories, we develop a strategic and personalized treatment plan tailored to each individual's unique needs and goals.",
          "Through this process, individuals are supported in developing healthier coping strategies, gaining greater self-awareness, and working towards lasting emotional well-being and personal growth.",
        ],
      },
    ],
  },
  {
    slug: "couples-and-marital-counselling",
    path: "/counselling-program/couples-and-marital-counselling",
    title: "Couples and Marital Counselling",
    summary:
      "Marriage and relationship counselling helps couples improve communication, resolve conflicts, and build healthier, stronger relationships.",
    image: "/images/counselling-marital.png",
    imageAlt: "Marital Counselling.png",
    sections: [
      {
        heading: "Marriage Counselling",
        paragraphs: [
          "Marriage counselling is designed to help couples resolve conflicts and strengthen their relationship. It provides support to both married and unmarried couples who may be experiencing difficulties, stress, or ongoing differences within their relationship. Individuals facing challenges that are affecting the quality of their relationship can also benefit from relationship counselling.",
          "One of the key benefits of therapy is that it helps identify patterns within the relationship that may be contributing to recurring issues. Couples gain insight into how their actions and responses impact one another. Once these underlying concerns are recognized, efforts can be made to address them and create healthier ways of interacting, enabling the relationship to be managed more effectively.",
        ],
      },
      {
        heading: "Signs That You May Benefit from Marriage Counselling",
        paragraphs: ["Some common indicators that counselling may be helpful include:"],
        list: [
          "You or your partner have become emotionally indifferent.",
          "Most communication is negative or frequently results in arguments.",
          "You or your partner are lying or keeping secrets.",
          "There is a lack of emotional or physical intimacy in the relationship.",
          "You or your partner have experienced infidelity.",
          "You find yourselves having the same arguments repeatedly.",
          "One partner feels that the other is emotionally unavailable.",
          "You feel that the romantic or sexual connection has diminished.",
          "You are coping with substance use or mental health concerns that are affecting the relationship.",
          "You have recently experienced a loss and are finding it difficult to process it together.",
        ],
      },
      {
        heading: "How We Help",
        paragraphs: [
          "At Being Endless, marriage counselling sessions provide a supportive and non-judgmental environment where couples can openly explore their concerns. The therapist may work with partners together as well as individually, helping them address conflicts, improve communication, and navigate the challenges they may be facing both as a couple and as individuals.",
        ],
      },
    ],
  },
  {
    slug: "family-counselling",
    path: "/counselling-program/family-counselling",
    title: "Family Counselling",
    summary:
      "Family counselling helps strengthen relationships, improve communication, and support families in navigating conflicts and life challenges together.",
    image: "/images/counselling-family.png",
    imageAlt: "Family Counselling.png",
    sections: [
      {
        heading: "Family Counselling",
        paragraphs: [
          "Family counselling is designed to support families experiencing conflicts or difficulties among family members. Individuals facing challenges involving multiple generations or adjusting to the addition of new family members may also benefit from family therapy. Family counselling can help improve cooperation and communication between parents and strengthen overall family relationships. Many families seek therapy to gain guidance in managing everyday problems, conflicts, or crises that affect family life.",
        ],
      },
      {
        heading: "Common Signs That Family Counselling May Be Helpful",
        paragraphs: ["Some situations that may indicate the need for family therapy include:"],
        list: [
          "Ongoing conflicts between siblings",
          "Inconsistent parenting approaches",
          "Marital or relationship difficulties affecting the family",
          "Building healthy and functional relationships following a divorce",
          "Adjusting to major life changes",
          "Coping with a chronic illness or the loss of a family member",
          "Difficulty communicating or expressing emotions effectively",
        ],
      },
      {
        heading: "How We Help",
        paragraphs: [
          "At Being Endless, family therapy sessions provide a safe and supportive environment where concerns can be explored openly. Depending on the family's needs, the therapist may work with the family as a whole, with individual members, or with a combination of both. By understanding the underlying causes of conflict, a strategic and personalized treatment plan can be developed to help families address their challenges and foster healthier relationships.",
        ],
      },
    ],
  },
  {
    slug: "⁠group-counselling",
    path: "/counselling-program/%E2%81%A0group-counselling",
    title: "⁠Group Counselling",
    summary:
      "Adolescent and young adult counselling provides guidance and support to help young individuals navigate life changes, build self-awareness, and make healthier decisions.",
    image: "/images/counselling-group.png",
    imageAlt: "Group Counselling.png",
    sections: [
      {
        heading: "Group Counselling",
        paragraphs: [
          "During adolescence and young adulthood, individuals undergo significant changes and adjustments in relation to their personality, family, peers, school, and relationships with the opposite sex. Without appropriate guidance and support, these challenges may contribute to emotional difficulties that can persist into adulthood and affect day-to-day functioning. Seeking counselling at a young age can help prevent the development of long-term issues by enabling young individuals to better understand themselves, their environment, and the challenges they face, ultimately helping them make healthier and more informed decisions.",
        ],
      },
      {
        heading: "Signs That You May Benefit from Counselling",
        paragraphs: ["Some common signs that may indicate the need for counselling include:"],
        list: [
          "Feeling unhappy, moody, or irritable most of the time",
          "Experiencing feelings of emptiness or emotional numbness",
          "Losing interest in activities that were once enjoyable",
          "Changes in appetite, eating habits, or weight",
          "Irregular sleep patterns",
          "Persistent tiredness, low energy, or lack of motivation",
          "Difficulty concentrating",
          "Feelings of worthlessness, guilt, or excessive self-criticism",
          "Recurring negative thoughts",
          "Suicidal thoughts or suicide attempts",
          "Intense fear or anxiety",
          "Excessive and uncontrollable worry about everyday situations",
          "Engaging in self-harm or self-injurious behaviors as a way of coping with emotional pain",
          "Concerns related to self-image",
          "Difficulty establishing and maintaining healthy boundaries",
        ],
      },
      {
        heading: "How We Help",
        paragraphs: [
          "At Being Endless, our therapists work collaboratively with young individuals to help them understand and address the underlying causes of their concerns. Using therapeutic approaches such as Cognitive Behavioral Therapy (CBT), Rational Emotive Behavior Therapy (REBT), Transactional Analysis, and other psychodynamic theories, we provide strategic and personalized counselling sessions tailored to each individual's unique needs and goals.",
          "Through a supportive and compassionate approach, we aim to empower young people with the skills, insight, and resilience needed to navigate life's challenges and foster emotional well-being.",
        ],
      },
    ],
  },
  {
    slug: "queer-(lgbtq+)-affirmative-counselling",
    path: "/counselling-program/queer-(lgbtq%2B)-affirmative-counselling",
    title: "Queer (LGBTQ+) affirmative counselling",
    summary:
      "Queer affirmative therapy provides a safe, inclusive, and affirming space that validates and supports diverse sexual orientations and gender identities.",
    image: "/images/counselling-lgbtq.png",
    imageAlt: "LGBTQ counselling.png",
    sections: [
      {
        heading: "Queer Affirmative Counselling",
        paragraphs: [
          "Queer affirmative therapy is an approach to counselling that embraces and validates the identities, relationships, and experiences of Lesbian, Gay, Bisexual, Transgender, Queer, and other gender and sexually diverse individuals. It is grounded in a positive and affirming understanding of diverse sexual orientations and gender identities.",
        ],
      },
      {
        heading: "Why Is Queer Affirmative Therapy Important?",
        paragraphs: [
          'Members of the LGBTQ+ community often face unique challenges related to their gender identities and sexual orientations, including social stigma, discrimination, prejudice, and violence. These experiences can contribute to significant emotional and psychological stress. Many individuals may feel compelled to remain "closeted" or conceal their authentic identities in order to feel safe and gain acceptance.',
          "Minority stress can manifest in various ways, ranging from everyday experiences such as hearing homophobic jokes to more severe events including discrimination in employment or housing, and experiences of physical or sexual assault. Individuals may also face pressure to conform to societal gender norms and encounter sexual prejudice. In addition, factors such as race, ethnicity, religion, socioeconomic status, and disabilities can further shape their lived experiences and influence their relationship with their sexuality and identity.",
        ],
      },
      {
        heading: "How We Help",
        paragraphs: [
          'These challenges highlight the need for specialized therapeutic support that provides queer individuals with a safe and affirming space to explore and address their concerns. At Being Endless, therapists strive to validate and affirm clients\' experiences without judgment, bias, attempts to "cure," or pressure to move in any particular direction.',
          "Even when therapists may not fully share or understand a client's lived realities or context, queer affirmative therapy recognizes and respects those experiences. The therapeutic relationship is built on empathy, acceptance, and the belief that every individual deserves to be seen, heard, and supported in their authentic self.",
        ],
      },
    ],
  },
  {
    slug: "couple-and-marital-relationship-counselling",
    path: "/counselling-program/couple-and-marital-relationship-counselling",
    title: "Couple and Marital Relationship Counselling",
    summary:
      "Relationship counselling provides a supportive space to strengthen connections, improve understanding, and navigate challenges in all types of relationships.",
    image: "/images/counselling-relationship.png",
    imageAlt: "Couple and relationship counselling.png",
    sections: [
      {
        heading: "Support for All Types of Relationships",
        paragraphs: [
          // NOTE: "Creative Horizons Counselling" is verbatim from the live page — likely a copy/paste leftover; confirm with the client.
          "At Creative Horizons Counselling, relationship counselling extends beyond romantic partnerships. We recognize that all forms of human connection can be deeply meaningful, yet often complex. Our services are designed to support a broad range of relationships, providing a safe and compassionate space to explore challenges, deepen understanding, and foster growth.",
          "Whether you are experiencing difficulties with a partner, co-parent, family member, friend, or colleague, relationship counselling offers an opportunity to strengthen connections and navigate life’s complexities together.",
        ],
      },
      {
        heading: "Who Is It For?",
        paragraphs: ["We welcome individuals and pairs from diverse backgrounds and life experiences, including:"],
        list: [
          "Couples (married, dating, or separated)",
          "Co-parents and blended families",
          "Parents and adult children",
          "Adult siblings and extended family members",
          "Friends experiencing conflict or life transitions",
          "Business or creative partners",
          "Members of chosen families or community-based relationships",
        ],
      },
      {
        heading: "Common Reasons People Seek Relationship Counselling",
        paragraphs: ["Individuals and relationships may benefit from counselling for a variety of reasons, including:"],
        list: [
          "Strengthening communication and emotional connection",
          "Navigating conflict, change, or experiences of loss",
          "Rebuilding trust and repairing relationship ruptures",
          "Exploring values, needs, and expectations",
          "Establishing and maintaining healthy boundaries",
          "Improving collaboration in parenting or shared responsibilities",
          "Processing past experiences that may be affecting current relationship dynamics",
        ],
      },
      {
        heading: "A Flexible and Inclusive Approach",
        paragraphs: [
          "Our therapists provide a client-centred and trauma-informed approach that is rooted in respect, collaboration, and cultural sensitivity. Based on your unique needs and goals, sessions may include:",
        ],
        list: [
          "Joint conversations",
          "Opportunities for individual reflection",
          "Expressive arts or play-based approaches, particularly in child and family work",
          "Nature-based or somatic practices that support nervous system regulation",
        ],
        after: [
          "Relationship counselling can offer a space for healing, growth, and renewed hope—where individuals and those they care about can feel seen, heard, and understood. You do not have to navigate these challenges alone.",
        ],
      },
    ],
  },
];

export function getCounsellingProgram(slug: string) {
  return counsellingPrograms.find((p) => p.slug === slug);
}
