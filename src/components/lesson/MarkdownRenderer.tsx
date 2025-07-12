import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FC } from 'react';
import rehypeRaw from 'rehype-raw';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownComponents: { [key: string]: FC<any> } = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={tomorrow as any}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={`${className || ''} bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-md text-blue-600 dark:text-blue-300 whitespace-nowrap`} {...props}>
        {children}
      </code>
    );
  },
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown components={MarkdownComponents} rehypePlugins={[rehypeRaw]}>
      {content}
    </ReactMarkdown>
  );
}
