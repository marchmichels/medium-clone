import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            description: "Comments won't show on the site until they've been approved by an admin.",
        }),
        defineField({
            name: 'email',
            type: 'string',
        }),
        defineField({
            name: 'comment',
            type: 'text',
        }),
        defineField({
            name: 'post',
            type: 'reference',
            to: { type: 'post' },
        }),
    ],
});