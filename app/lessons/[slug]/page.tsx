import MarkdocContent from "@/app/components/MarkdocContent";
import { allLessons } from "contentlayer/generated";

const LessonLayout = ({ params }: { params: { slug: string } }) => {
  const lesson = allLessons.find(
    (lesson) => lesson._raw.flattenedPath === params.slug
  );
  if (!lesson) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{lesson.title}</h1>
        <p>{lesson.description}</p>
      </div>
      <MarkdocContent doc={lesson.body.raw} />
    </article>
  );
};

export default LessonLayout;
