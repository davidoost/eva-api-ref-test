import ReactMarkdown from "react-markdown";

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent(props: MarkdownContentProps) {
  return <ReactMarkdown>{props.content}</ReactMarkdown>;
}
