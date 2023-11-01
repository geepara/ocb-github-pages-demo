import { allLessons, Lesson } from "contentlayer/generated";
import Link from "next/link";

export default function Home() {
  const lessons = allLessons;

  return (
    <div className="p-10">
      <h1 className="font-bold text-4xl font-system-ui">Lessons</h1>
      {lessons.map((lesson: Lesson) => (
        <div key={lesson.url} className="my-4">
          <Link href={lesson.url}>{lesson.title}</Link>
        </div>
      ))}
    </div>
  );
}
