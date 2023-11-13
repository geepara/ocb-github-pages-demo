import Link from "next/link";

export default function NextLesson({
  link,
  children,
}: {
  link: string;
  children: any;
}) {
  return (
    <div className="my-6">
      <Link href={link} className="">
        <div className="border drop-shadow-md bg-white rounded-lg p-10">
          <div className="text-green-700 text-lg font-semibold">
            Next Lesson:
          </div>
          <div className="text-gray-700">{children}</div>
        </div>
      </Link>
    </div>
  );
}
