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
    })
  ],
});
