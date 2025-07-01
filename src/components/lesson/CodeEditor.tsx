'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeEditorProps {
  language: string;
  initialCode: string;
  solution?: string;
}

export const CodeEditor = ({ language, initialCode, solution }: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  
  const runCode = () => {
    // Simple JavaScript execution for demo
    if (language === 'javascript') {
      try {
        const result = eval(code);
        setOutput(String(result));
      } catch (error) {
        if (error instanceof Error) {
          setOutput(`Error: ${error.message}`);
        } else {
          setOutput(`An unknown error occurred`);
        }
      }
    }
  };
  
  return (
    <div className="code-editor-container">
      <div className="editor-section">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="code-textarea"
          rows={10}
        />
        <div className="editor-controls">
          <button onClick={runCode}>Run Code</button>
          {solution && (
            <button onClick={() => setShowSolution(!showSolution)}>
              {showSolution ? 'Hide' : 'Show'} Solution
            </button>
          )}
        </div>
      </div>
      
      <div className="output-section">
        <h4>Output:</h4>
        <pre className="output">{output}</pre>
      </div>
      
      {showSolution && solution && (
        <div className="solution-section">
          <h4>Solution:</h4>
          <SyntaxHighlighter language={language} style={dracula}>
            {solution}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};
