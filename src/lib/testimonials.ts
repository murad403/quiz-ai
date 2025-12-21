export type TTestimonial = {
  id: number;
  name: string;
  role: string;
  initials: string;
  rating: number;
  review: string;
}

export const testimonials: TTestimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "High School Teacher",
    initials: "SJ",
    rating: 5,
    review:
      "QuizAI has completely transformed how I create assessments. What used to take hours now takes minutes, and the quality is outstanding.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "College Professor",
    initials: "MC",
    rating: 5,
    review:
      "The analytics feature helps me identify exactly where my students are struggling. It's like having a teaching assistant!",
  },
  {
    id: 3,
    name: "Emily Parker",
    role: "Middle School Teacher",
    initials: "EP",
    rating: 5,
    review:
      "My students love how easy it is to take quizzes. No login required means less friction and better participation.",
  },
];