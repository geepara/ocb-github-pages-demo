import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Lesson = defineDocumentType(() => ({
  name: 'Lesson',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (lesson) => `/lessons/${lesson._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'lessons', documentTypes: [Lesson] })