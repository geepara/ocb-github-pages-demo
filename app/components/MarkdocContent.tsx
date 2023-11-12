import Markdoc from "@markdoc/markdoc";
import React from "react";
import QuizQuestion from "./QuizQuestion";
import FunFact from "./FunFact";
import NextLesson from "./NextLesson";

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
  fun_fact: {
    render: "FunFact",
    attributes: {},
  },
  next_lesson: {
    render: "NextLesson",
    attributes: {
      link: {
        type: String,
        default: "",
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
      FunFact: FunFact,
      NextLesson: NextLesson,
    },
  });
}
