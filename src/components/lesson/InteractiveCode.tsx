"use client";

import { useState, useEffect } from "react";
import {
  Play,
  RotateCcw,
  Eye,
  EyeOff,
  Copy,
  Check,
  Terminal,
  Code2,
  Lightbulb,
  Zap,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

interface InteractiveCodeProps {
  initialCode: string;
  solution: string;
}

const InteractiveCode = ({ initialCode, solution }: InteractiveCodeProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [showSolution, setShowSolution] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [lineNumbers, setLineNumbers] = useState<number[]>([]);

  useEffect(() => {
    const lines = code.split("\n").length;
    setLineNumbers(Array.from({ length: lines }, (_, i) => i + 1));
  }, [code]);

  const runCode = async () => {
    setIsRunning(true);
    setHasError(false);

    // Simulate processing delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      // Create a safer evaluation context
      const func = new Function(
        "console",
        `
        const logs = [];
        const mockConsole = {
          log: (...args) => logs.push(args.join(' ')),
          error: (...args) => logs.push('Error: ' + args.join(' ')),
          warn: (...args) => logs.push('Warning: ' + args.join(' '))
        };
        
        try {
          ${code}
        } catch (e) {
          mockConsole.error(e.message);
        }
        
        return logs.join('\\n') || 'Code executed successfully (no output)';
      `
      );

      const result = func();
      setOutput(result);
    } catch (error) {
      setHasError(true);
      if (error instanceof Error) {
        setOutput(`Error: ${error.message}`);
      } else {
        setOutput(`An unknown error occurred`);
      }
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput("");
    setHasError(false);
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy code");
    }
  };

  const copySolution = async () => {
    try {
      await navigator.clipboard.writeText(solution);
      setCode(solution);
      setShowSolution(false);
    } catch {
      console.error("Failed to copy solution");
    }
  };

  return (
    <div className="w-full max-w-none">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-t-2xl p-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Code2 className="w-4 h-4" />
              <span className="text-sm font-medium">
                Interactive Code Editor
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={copyCode}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors duration-200 text-slate-400 hover:text-white"
              title="Copy code"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={resetCode}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors duration-200 text-slate-400 hover:text-white"
              title="Reset code"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Code Editor */}
      <div className="relative bg-slate-900 border-x border-slate-700">
        <div className="flex">
          {/* Line Numbers */}
          <div className="bg-slate-800 px-3 py-4 text-slate-500 text-sm font-mono select-none border-r border-slate-700">
            {lineNumbers.map((num) => (
              <div key={num} className="leading-6 text-right">
                {num}
              </div>
            ))}
          </div>

          {/* Code Input */}
          <div className="flex-1 relative">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-64 p-4 bg-transparent text-slate-100 font-mono text-sm leading-6 resize-none focus:outline-none placeholder-slate-500"
                placeholder="// Start coding here..."
                spellCheck={false}
                style={{
                  fontFamily:
                    'JetBrains Mono, Consolas, Monaco, "Courier New", monospace',
                  tabSize: 2,
                }}
              />

            {/* Syntax Highlighting Overlay */}
            <div className="absolute inset-0 pointer-events-none pl-4 pt-4">
              <pre className="w-full h-full p-4 bg-transparent text-slate-100 font-mono text-sm leading-6 resize-none focus:outline-none placeholder-slate-500">
                {code}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-slate-800 p-4 border-x border-slate-700">
        <div className="flex items-center gap-3">
          <button
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
          >
            {isRunning ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span className="font-medium">Running...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span className="font-medium">Run Code</span>
              </>
            )}
          </button>

          <button
            onClick={() => setShowSolution(!showSolution)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-lg hover:from-violet-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-violet-500/25"
          >
            {showSolution ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
            <span className="font-medium">
              {showSolution ? "Hide" : "Show"} Solution
            </span>
          </button>

          <div className="flex items-center gap-2 text-slate-400 text-sm ml-auto">
            <Zap className="w-4 h-4" />
            <span>Press Ctrl+Enter to run</span>
          </div>
        </div>
      </div>

      {/* Output Section */}
      <div className="bg-slate-900 rounded-b-2xl border border-slate-700 border-t-0">
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
          <Terminal className="w-4 h-4 text-slate-400" />
          <span className="text-sm font-medium text-slate-300">Output</span>
          {hasError && <AlertCircle className="w-4 h-4 text-red-400" />}
          {output && !hasError && (
            <CheckCircle className="w-4 h-4 text-emerald-400" />
          )}
        </div>

        <div className="p-4">
          {output ? (
            <div
              className={`font-mono text-sm leading-6 ${
                hasError ? "text-red-400" : "text-emerald-400"
              } bg-slate-800/50 rounded-lg p-4 border ${
                hasError ? "border-red-500/20" : "border-emerald-500/20"
              }`}
            >
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
          ) : (
            <div className="text-slate-500 text-sm italic flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>Click "Run Code" to see output here...</span>
            </div>
          )}
        </div>
      </div>

      {/* Solution Section */}
      {showSolution && (
        <div className="mt-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl border border-violet-200 overflow-hidden animate-slideDown">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              <span className="font-semibold">Solution</span>
            </div>
            <button
              onClick={copySolution}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200 text-sm"
            >
              <Copy className="w-4 h-4" />
              <span>Use This Solution</span>
            </button>
          </div>

          <div className="p-4">
            <pre className="w-full h-full p-4 bg-transparent text-slate-100 font-mono text-sm leading-6 resize-none focus:outline-none placeholder-slate-500">
              {solution}
            </pre>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default InteractiveCode;
