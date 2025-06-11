import React from "react";
import ReactMarkdown from "react-markdown";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ContextOutput = ({ content }) => {
  if (!content) return null;

  // Render Code blocks with SyntaxHighlighter
  if (content.includes("```")) {
    const match = content.match(/```(\w+)?\n([\s\S]*?)```/);
    if (match) {
      const language = match[1] || "text";
      const code = match[2];

      return (
        <div className="context-preview code-preview">
          <SyntaxHighlighter language={language} style={atomOneLight}>
            {code}
          </SyntaxHighlighter>
        </div>
      );
    }
  }

  // Render Tables or Markdown or Slides
  if (
    content.includes("|") || content.includes("#") ||
    content.includes("**") || content.includes("![")
  ) {
    return (
      <div className="context-preview markdown-view">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    );
  }

  // Fallback plain text
  return <div className="context-preview plain-text">{content}</div>;
};

export default ContextOutput;
