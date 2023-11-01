import Markdoc from "@markdoc/markdoc";
import React from "react";
import QuizQuestion from "./QuizQuestion";

const tags = {
  quiz: {
    render: "QuizQuestion",
    attributes: {
      answer: {
        type: Number,
        default: 1,
      },
    },
  },
};

export default function MarkdocContent({ doc }: { doc: string }) {
  const ast = Markdoc.parse(doc);
  const content = Markdoc.transform(ast, { tags });
  return Markdoc.renderers.react(content, React, {
    components: {
      QuizQuestion: QuizQuestion,
    },
  });
}
