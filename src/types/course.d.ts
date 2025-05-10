// Course TypeScript interface based on Sanity schema

export interface Course {
  _id: string;
  _type: 'course';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  
  id?: number;
  title: string;
  slug: {
    current: string;
    _type: 'slug';
  };
  provider: string;
  image?: string;
  rating?: number;
  students?: number;
  duration?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  tag?: {
    text?: string;
    color?: string;
  };
  description: string;
  content: string;
  enrollmentLink: string;
  releaseDate?: string;
  
  features?: CourseFeature[];
  instructor?: CourseInstructor;
  studentReviews?: StudentReview[];
  studentFeedback?: StudentFeedback;
  skillsIncluded?: string[];
  courseContent?: CourseModule[];
  relatedCourses?: RelatedCourse[];
  categories?: string[];
}

export interface CourseFeature {
  _key: string;
  label: string;
  icon: string;
}

export interface CourseInstructor {
  name: string;
  title?: string;
  description?: string;
  pictureUrl?: string;
  profileLink?: {
    label: string;
    url: string;
  };
}

export interface StudentReview {
  _key: string;
  studentName: string;
  rating: number;
  comment?: string;
  date?: string;
}

export interface RatingDistribution {
  _key: string;
  stars: number;
  percentage: number;
}

export interface StudentFeedback {
  overallRating?: number;
  maxRating?: number;
  ratingDistribution?: RatingDistribution[];
}

export interface SubModule {
  _key: string;
  title: string;
  duration?: {
    value: number;
    unit: 'minutes' | 'hours';
  };
  status?: 'regular' | 'preview' | 'comingSoon' | 'free';
}

export interface CourseModule {
  _key: string;
  title: string;
  subModules?: SubModule[];
}

export interface RelatedCourse {
  _key: string;
  _ref: string;
  _type: 'reference';
}

// For expanded related courses (when using GROQ to expand references)
export interface ExpandedRelatedCourse {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  image?: string;
  // Add other fields you typically need when displaying related courses
}