import {defineType, defineField} from 'sanity';

export default defineType({
  name: 'course',        // the API name for this schema
  title: 'Course',       // the human-readable title
  type: 'document',      // each course is a standalone document
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
      description: 'Numeric identifier for ordering or reference'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'provider',
      title: 'Provider',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image URL',
      type: 'url',
      description: 'Link to course image'
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Average rating out of 5',
      validation: Rule => Rule.min(0).max(5)
    }),
    defineField({
      name: 'students',
      title: 'Number of Students',
      type: 'number',
      description: 'Total enrolled students'
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Length of the course (e.g., 8 weeks)'
    }),
    defineField({
      name: 'level',
      title: 'Difficulty Level',
      type: 'string',
      options: {
        list: [
          {title: 'Beginner', value: 'Beginner'},
          {title: 'Intermediate', value: 'Intermediate'},
          {title: 'Advanced', value: 'Advanced'},
          {title: 'All Levels', value: 'All Levels'}
        ]
      }
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'string'
        },
        {
          name: 'color',
          title: 'Color',
          type: 'string',
          description: 'Optional theme color for this tag'
        }
      ],
      options: {
        collapsible: true,
        collapsed: false
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Course description with markdown support',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      description: 'Detailed course content with markdown support',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'enrollmentLink',
      title: 'Enrollment Link',
      type: 'url',
      description: 'Link to enroll in the course',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm:ss',
      }
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      description: 'List of course features with icons',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Name of the icon to display (e.g., "book", "video", "certificate")',
              validation: Rule => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'icon'
            }
          }
        }
      ]
    }),
    defineField({
      name: 'instructor',
      title: 'Instructor',
      type: 'object',
      description: 'Information about the course instructor',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Professional title or position'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Bio or description of the instructor'
        },
        {
          name: 'pictureUrl',
          title: 'Picture URL',
          type: 'url',
          description: 'Link to instructor profile picture'
        },
        {
          name: 'profileLink',
          title: 'Profile Link',
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Text displayed for the link',
              validation: Rule => Rule.required()
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'Link to instructor profile',
              validation: Rule => Rule.required()
            }
          ]
        }
      ],
      options: {
        collapsible: true,
        collapsed: false
      }
    }),
    defineField({
      name: 'studentReviews',
      title: 'Student Reviews',
      type: 'array',
      description: 'Individual student reviews of the course',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'studentName',
              title: 'Student Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'number',
              description: 'Rating given by the student (out of 5)',
              validation: Rule => Rule.required().min(1).max(5)
            },
            {
              name: 'comment',
              title: 'Comment',
              type: 'text',
              description: 'Student review comment'
            },
            {
              name: 'date',
              title: 'Review Date',
              type: 'date',
              options: {
                dateFormat: 'YYYY-MM-DD'
              }
            }
          ],
          preview: {
            select: {
              title: 'studentName',
              subtitle: 'rating'
            }
          }
        }
      ]
    }),
    defineField({
      name: 'studentFeedback',
      title: 'Student Feedback Statistics',
      type: 'object',
      description: 'Aggregated student feedback and ratings',
      fields: [
        {
          name: 'overallRating',
          title: 'Overall Rating',
          type: 'number',
          description: 'Average overall rating (e.g., 4.5)',
          validation: Rule => Rule.min(0)
        },
        {
          name: 'maxRating',
          title: 'Maximum Rating',
          type: 'number',
          description: 'Maximum possible rating (e.g., 5)',
          validation: Rule => Rule.min(1)
        },
        {
          name: 'ratingDistribution',
          title: 'Rating Distribution',
          type: 'array',
          description: 'Distribution of ratings by star level',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'stars',
                  title: 'Stars',
                  type: 'number',
                  description: 'Number of stars (e.g., 5 for 5-star rating)',
                  validation: Rule => Rule.required().min(1).max(5)
                },
                {
                  name: 'percentage',
                  title: 'Percentage',
                  type: 'number',
                  description: 'Percentage of students giving this rating',
                  validation: Rule => Rule.required().min(0).max(100)
                }
              ],
              preview: {
                select: {
                  title: 'stars',
                  subtitle: 'percentage'
                },
                prepare({title, subtitle}) {
                  return {
                    title: `${title} Stars`,
                    subtitle: `${subtitle}%`
                  }
                }
              }
            }
          ]
        }
      ],
      options: {
        collapsible: true,
        collapsed: false
      }
    }),
    defineField({
      name: 'skillsIncluded',
      title: 'Skills Included',
      type: 'array',
      description: 'List of skills students will learn from this course',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }),
  defineField({
    name: 'courseContent',
    title: 'Course Content',
    type: 'array',
    description: 'Modules and lessons that make up the course',
    of: [
      {
        type: 'object',
        title: 'Module',
        fields: [
          {
            name: 'title',
            title: 'Module Title',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            name: 'description',
            title: 'Module Description',
            type: 'text',
            description: 'Brief overview of the module content',
            validation: Rule => Rule.required()
          },
          {
            name: 'subModules',
            title: 'Sub Modules',
            type: 'array',
            of: [
              {
                type: 'object',
                title: 'Sub Module',
                fields: [
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    validation: Rule => Rule.required()
                  },
                  {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    description: 'Brief overview of the sub module content',
                  },
                  {
                    name: 'videoUrl',
                    title: 'Video URL',
                    type: 'url',
                    description: 'Link to the video lesson for this sub module'
                  },
                  {
                    name: 'resources',
                    title: 'Resources',
                    type: 'array',
                    of: [{type: 'url'}],
                    description: 'Additional resources or links for this sub module'
                  },
                  {
                    name: 'duration',
                    title: 'Duration',
                    type: 'object',
                    fields: [
                      {
                        name: 'value',
                        title: 'Value',
                        type: 'number',
                        validation: Rule => Rule.required().positive()
                      },
                      {
                        name: 'unit',
                        title: 'Unit',
                        type: 'string',
                        options: {
                          list: [
                            {title: 'Minutes', value: 'minutes'},
                            {title: 'Hours', value: 'hours'}
                          ]
                        },
                        validation: Rule => Rule.required()
                      }
                    ]
                  },
                  {
                    name: 'status',
                    title: 'Status',
                    type: 'string',
                    options: {
                      list: [
                        {title: 'Regular', value: 'regular'},
                        {title: 'Preview', value: 'preview'},
                        {title: 'Coming Soon', value: 'comingSoon'},
                        {title: 'Free', value: 'free'}
                      ]
                    }
                  }
                ],
                preview: {
                  select: {
                    title: 'title',
                    status: 'status',
                    durationValue: 'duration.value',
                    durationUnit: 'duration.unit'
                  },
                  prepare({title, status, durationValue, durationUnit}) {
                    return {
                      title,
                      subtitle: `${status ? `[${status}] ` : ''}${durationValue || ''} ${durationUnit || ''}`
                    }
                  }
                }
              }
            ]
          }
        ],
        preview: {
          select: {
            title: 'title'
          }
        }
      }
    ]
  }),
  defineField({
    name: 'relatedCourses',
    title: 'Related Courses',
    type: 'array',
    description: 'List of related courses by their slugs',
    of: [
      {
        type: 'reference',
        title: 'Course Reference',
        to: [{type: 'course'}],
        options: {
          disableNew: true
        }
      }
    ],
    validation: Rule => Rule.unique()
  }),
  defineField({
    name: 'categories',
    title: 'Categories',
    type: 'array',
    description: 'Course categories (e.g., JavaScript, Web Development)',
    of: [{type: 'string'}],
    options: {
      layout: 'tags'
    }
  })
  ],
});