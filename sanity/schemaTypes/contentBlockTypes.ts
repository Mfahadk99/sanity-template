
import { defineType, defineField, defineArrayMember } from 'sanity'

// Section Text - replaces textBlock with variants and margin options
export const sectionTextType = defineType({
    name: 'sectionText',
    title: 'Section Text',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'richText',
            title: 'Rich Text',
            type: 'blockContent'
        }),
        defineField({
            name: 'variant',
            title: 'Layout Variant',
            type: 'string',
            options: {
                list: [
                    { title: 'One Column', value: 'oneColumn' },
                    { title: 'Two Columns', value: 'twoColumns' }
                ]
            },
            initialValue: 'oneColumn'
        }),
        defineField({
            name: 'margin',
            title: 'Margin',
            type: 'string',
            options: {
                list: [
                    { title: 'Small', value: 's' },
                    { title: 'Medium', value: 'm' },
                    { title: 'Large', value: 'l' }
                ]
            },
            initialValue: 'm'
        })
    ],
    preview: {
        select: {
            title: 'title',
            variant: 'variant'
        },
        prepare({ title, variant }) {
            return {
                title: title || 'Section Text',
                subtitle: `Text - ${variant || 'one column'}`
            }
        }
    }
})

// Section Image - enhanced image block with layout variants
export const sectionImageType = defineType({
    name: 'sectionImage',
    title: 'Section Image',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    validation: Rule => Rule.required()
                }
            ]
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'paragraph',
            title: 'Paragraph',
            type: 'blockContent'
        }),
        defineField({
            name: 'layoutVariant',
            title: 'Layout Variant',
            type: 'string',
            options: {
                list: [
                    { title: 'Default', value: 'default' },
                    { title: 'Text Left', value: 'textLeft' },
                    { title: 'Text Right', value: 'textRight' }
                ]
            },
            initialValue: 'default'
        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
            variant: 'layoutVariant'
        },
        prepare({ title, media, variant }) {
            return {
                title: title || 'Section Image',
                media,
                subtitle: `Image - ${variant || 'default'}`
            }
        }
    }
})

// Section Gallery - with layout options
export const sectionGalleryType = defineType({
    name: 'sectionGallery',
    title: 'Section Gallery',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Gallery Title',
            type: 'string'
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alternative Text',
                            type: 'string',
                            validation: Rule => Rule.required()
                        }
                    ]
                }
            ]
        }),
        defineField({
            name: 'layout',
            title: 'Layout',
            type: 'string',
            options: {
                list: [
                    { title: 'Grid', value: 'grid' },
                    { title: 'Slider', value: 'slider' }
                ]
            },
            initialValue: 'grid'
        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'images.0',
            layout: 'layout'
        },
        prepare({ title, media, layout }) {
            return {
                title: title || 'Section Gallery',
                media,
                subtitle: `Gallery - ${layout || 'grid'}`
            }
        }
    }
})

// Section Hero - comprehensive hero section
export const sectionHeroType = defineType({
    name: 'sectionHero',
    title: 'Section Hero',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'introVideo',
            title: 'Intro Video',
            type: 'video'
        }),
        defineField({
            name: 'image',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string'
                }
            ]
        }),
        defineField({
            name: 'paragraph',
            title: 'Paragraph',
            type: 'blockContent'
        }),
        defineField({
            name: 'link',
            title: 'Call to Action Link',
            type: 'object',
            fields: [
                { name: 'text', title: 'Link Text', type: 'string' },
                { name: 'url', title: 'URL', type: 'url' }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image'
        },
        prepare({ title, media }) {
            return {
                title: title || 'Section Hero',
                media,
                subtitle: 'Hero Section'
            }
        }
    }
})

// Section Cards - flexible card system
export const sectionCardsType = defineType({
    name: 'sectionCards',
    title: 'Section Cards',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string'
        }),
        defineField({
            name: 'variant',
            title: 'Card Variant',
            type: 'string',
            options: {
                list: [
                    { title: 'Key Dates', value: 'keyDates' },
                    { title: 'Partners', value: 'partners' },
                    { title: 'Key Numbers', value: 'keyNumbers' },
                    { title: 'Standard', value: 'standard' }
                ]
            },
            initialValue: 'standard'
        }),
        defineField({
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'paragraph', title: 'Paragraph', type: 'blockContent' },
                        { 
                            name: 'image', 
                            title: 'Image', 
                            type: 'image',
                            options: { hotspot: true },
                            fields: [
                                { name: 'alt', title: 'Alternative Text', type: 'string' }
                            ]
                        },
                        { name: 'link', title: 'Link', type: 'url' }
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title',
            variant: 'variant'
        },
        prepare({ title, variant }) {
            return {
                title: title || 'Section Cards',
                subtitle: `Cards - ${variant || 'standard'}`
            }
        }
    }
})

// Section Zones - for displaying event zones
export const sectionZonesType = defineType({
    name: 'sectionZones',
    title: 'Section Zones',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string'
        }),
        defineField({
            name: 'zones',
            title: 'Zones',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'zonePage' }]
                }
            ]
        }),
        defineField({
            name: 'link',
            title: 'See All Link',
            type: 'object',
            fields: [
                { name: 'text', title: 'Link Text', type: 'string' },
                { name: 'url', title: 'URL', type: 'url' }
            ]
        }),
        defineField({
            name: 'layout',
            title: 'Layout Size',
            type: 'string',
            options: {
                list: [
                    { title: 'Big', value: 'big' },
                    { title: 'Small', value: 'small' }
                ]
            },
            initialValue: 'big'
        })
    ],
    preview: {
        select: {
            title: 'title',
            layout: 'layout'
        },
        prepare({ title, layout }) {
            return {
                title: title || 'Section Zones',
                subtitle: `Zones - ${layout || 'big'} layout`
            }
        }
    }
})

// Section FAQ - dedicated FAQ section
export const sectionFaqType = defineType({
    name: 'sectionFaq',
    title: 'Section FAQ',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string'
        }),
        defineField({
            name: 'questions',
            title: 'Questions',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', title: 'Question', type: 'string' },
                        { name: 'answer', title: 'Answer', type: 'blockContent' }
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: title || 'Section FAQ',
                subtitle: 'FAQ Section'
            }
        }
    }
})

// Section Prices - complex pricing structure
export const sectionPricesType = defineType({
    name: 'sectionPrices',
    title: 'Section Prices',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string'
        }),
        defineField({
            name: 'categories',
            title: 'Price Categories',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'categoryName', title: 'Category Name', type: 'string' },
                        {
                            name: 'items',
                            title: 'Price Items',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'itemName', title: 'Item Name', type: 'string' },
                                        {
                                            name: 'cards',
                                            title: 'Price Cards',
                                            type: 'array',
                                            of: [
                                                {
                                                    type: 'object',
                                                    fields: [
                                                        { name: 'title', title: 'Title', type: 'string' },
                                                        { name: 'value', title: 'Price Value', type: 'string' },
                                                        { name: 'subtitle', title: 'Subtitle', type: 'string' },
                                                        { name: 'link', title: 'Link', type: 'url' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: title || 'Section Prices',
                subtitle: 'Pricing Section'
            }
        }
    }
})

// Video block (keeping original for backward compatibility)
export const videoBlockType = defineType({
    name: 'video',
    title: 'Video',
    type: 'object',
    fields: [
        {
            name: 'asset',
            title: 'Video Asset',
            type: 'mux.video',
            description: 'Upload or select a video file'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3
        },
        {
            name: 'thumbnail',
            title: 'Custom Thumbnail',
            type: 'image',
            description: 'Optional: Override auto-generated thumbnail',
            options: {
                hotspot: true
            }
        },
        {
            name: 'autoplay',
            title: 'Autoplay',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'loop',
            title: 'Loop Video',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'muted',
            title: 'Muted by Default',
            type: 'boolean',
            initialValue: true
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'asset'
        }
    }
})

// Keep existing blocks for backward compatibility
export const textBlockType = defineType({
    name: 'textBlock',
    title: 'Text Block (Legacy)',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string'
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        })
    ],
    preview: {
        select: {
            title: 'heading'
        },
        prepare({ title }) {
            return {
                title: title || 'Text Block',
                subtitle: 'Legacy Text Block'
            }
        }
    }
})

export const imageBlockType = defineType({
    name: 'imageBlock',
    title: 'Image Block (Legacy)',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string'
                }
            ]
        }),
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'string'
        })
    ],
    preview: {
        select: {
            media: 'image',
            title: 'caption'
        },
        prepare({ media, title }) {
            return {
                title: title || 'Image Block',
                media,
                subtitle: 'Legacy Image Block'
            }
        }
    }
})

export const galleryBlockType = defineType({
    name: 'galleryBlock',
    title: 'Gallery Block (Legacy)',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Gallery Title',
            type: 'string'
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alternative Text',
                            type: 'string'
                        },
                        {
                            name: 'caption',
                            title: 'Caption',
                            type: 'string'
                        }
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'images.0'
        },
        prepare({ title, media }) {
            return {
                title: title || 'Gallery Block',
                media,
                subtitle: 'Legacy Gallery Block'
            }
        }
    }
})

export const ctaBlockType = defineType({
    name: 'ctaBlock',
    title: 'Call to Action Block',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string'
        }),
        defineField({
            name: 'text',
            title: 'Text',
            type: 'text'
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string'
        }),
        defineField({
            name: 'buttonLink',
            title: 'Button Link',
            type: 'url'
        }),
        defineField({
            name: 'variant',
            title: 'Variant',
            type: 'string',
            options: {
                list: [
                    { title: 'Primary', value: 'primary' },
                    { title: 'Secondary', value: 'secondary' },
                    { title: 'Accent', value: 'accent' }
                ]
            }
        })
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'buttonText'
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'CTA Block',
                subtitle: `CTA: ${subtitle || ''}`
            }
        }
    }
})

export const featureListBlockType = defineType({
    name: 'featureListBlock',
    title: 'Feature List Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Feature Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'text' },
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Star', value: 'star' },
                                    { title: 'Heart', value: 'heart' },
                                    { title: 'Check', value: 'check' },
                                    { title: 'Info', value: 'info' },
                                    { title: 'Warning', value: 'warning' }
                                ]
                            }
                        }
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: title || 'Feature List Block',
                subtitle: 'Feature List'
            }
        }
    }
})

export const testimonialBlockType = defineType({
    name: 'testimonialBlock',
    title: 'Testimonial Block',
    type: 'object',
    fields: [
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'text'
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string'
        }),
        defineField({
            name: 'role',
            title: 'Role/Company',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Author Image',
            type: 'image',
            options: { hotspot: true }
        })
    ],
    preview: {
        select: {
            title: 'author',
            subtitle: 'quote',
            media: 'image'
        },
        prepare({ title, subtitle, media }) {
            return {
                title: title || 'Testimonial',
                subtitle: subtitle ? `"${subtitle.substring(0, 50)}..."` : 'Testimonial',
                media
            }
        }
    }
})

export const accordionBlockType = defineType({
    name: 'accordionBlock',
    title: 'Accordion Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'items',
            title: 'Accordion Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Item Title', type: 'string' },
                        { name: 'content', title: 'Content', type: 'blockContent' }
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: title || 'Accordion Block',
                subtitle: 'Accordion'
            }
        }
    }
})

export const contactFormBlockType = defineType({
    name: 'contactFormBlock',
    title: 'Contact Form Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Form Title',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text'
        }),
        defineField({
            name: 'formFields',
            title: 'Form Fields',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'fieldType',
                            title: 'Field Type',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Text', value: 'text' },
                                    { title: 'Email', value: 'email' },
                                    { title: 'Phone', value: 'phone' },
                                    { title: 'Textarea', value: 'textarea' },
                                    { title: 'Select', value: 'select' },
                                    { title: 'Checkbox', value: 'checkbox' }
                                ]
                            }
                        },
                        { name: 'label', title: 'Label', type: 'string' },
                        { name: 'required', title: 'Required', type: 'boolean' },
                        {
                            name: 'options',
                            title: 'Options (for select fields)',
                            type: 'array',
                            of: [{ type: 'string' }],
                            hidden: ({ parent }) => parent?.fieldType !== 'select'
                        }
                    ]
                }
            ]
        }),
        defineField({
            name: 'submitButtonText',
            title: 'Submit Button Text',
            type: 'string',
            initialValue: 'Submit'
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: title || 'Contact Form',
                subtitle: 'Form'
            }
        }
    }
})

export const mapBlockType = defineType({
    name: 'mapBlock',
    title: 'Map Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'geopoint'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text'
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: title || 'Map Block',
                subtitle: 'Map'
            }
        }
    }
})
