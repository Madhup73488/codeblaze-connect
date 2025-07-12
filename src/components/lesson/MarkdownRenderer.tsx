import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FC, HTMLProps } from 'react';
import rehypeRaw from 'rehype-raw';

interface MarkdownRendererProps {
  content: string;
}

interface CodeProps extends HTMLProps<HTMLElement> {
  inline?: boolean;
}

const MarkdownComponents: { [key: string]: FC<CodeProps> } = {
  code({ inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    if (!inline && match) {
      return (
        <SyntaxHighlighter
          style={tomorrow}
          language={match[1]}
          PreTag="div"
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      );
    }
    return (
      <code className={`${className || ''} bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-md text-blue-600 dark:text-blue-300`} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md overflow-x-auto">{children}</pre>,
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown components={MarkdownComponents} rehypePlugins={[rehypeRaw]}>
      {content}
    </ReactMarkdown>
  );
}
