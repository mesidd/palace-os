"use client"

import React, { useState, useRef, useEffect } from 'react';

const commands = {
  help: {
    description: "Lists all available commands.",
    output: () => (
      <div>
        <p className="text-cyan-400">Available Commands:</p>
        <ul className="list-inside list-disc mt-2">
          <li><span className="font-semibold text-white">whoami</span> - Display my bio.</li>
          <li><span className="font-semibold text-white">email</span> - Show my email address.</li>
          <li><span className="font-semibold text-white">github</span> - Open my GitHub profile.</li>
          <li><span className="font-semibold text-white">linkedin</span> - Open my LinkedIn profile.</li>
          <li><span className="font-semibold text-white">clear</span> - Clear the terminal screen.</li>
        </ul>
      </div>
    )
  },
  whoami: {
    description: "Display my bio.",
    output: "Siddhartha Sharma: A craftsman, philosopher, and engineer building timeless, resilient software."
  },
  email: {
    description: "Show my email address.",
    output: <a href="mailto:siddhartha.sharma@example.com" className="text-white underline">siddhartha.sharma@example.com</a>
  },
  github: {
    description: "Open my GitHub profile.",
    output: () => {
      window.open("https://github.com/your-username", "_blank");
      return "Opening GitHub profile...";
    }
  },
  linkedin: {
    description: "Open my LinkedIn profile.",
    output: () => {
      window.open("https://linkedin.com/in/your-profile", "_blank");
      return "Opening LinkedIn profile...";
    }
  },
  clear: {
    description: "Clear the terminal screen.",
    output: null
  }
};

type Command = keyof typeof commands;

export function Terminal() {
  const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const command = input.trim().toLowerCase() as Command;
    let output: React.ReactNode;

    if (command === 'clear') {
      setHistory([]);
    } else if (commands[command]) {
      const cmd = commands[command];
      output = typeof cmd.output === 'function' ? cmd.output() : cmd.output;
      setHistory(prev => [...prev, { command, output }]);
    } else {
      output = `Command not found: ${command}. Type 'help' for a list of commands.`;
      setHistory(prev => [...prev, { command, output }]);
    }

    setInput('');
  };

  return (
    <div 
      className="w-full h-[26rem] bg-black/20 rounded-lg border border-border/60 shadow-[0_0_40px_#0ff] p-4 font-mono text-sm text-slate-300 overflow-y-auto"

      onClick={() => inputRef.current?.focus()}
    >
      <p>Welcome to the Palace-OS Terminal.</p>
      <p className="mb-4">Type <span className="text-cyan-400">&apos;help&apos;</span> to see the list of available commands.</p>
      
      {history.map((line, index) => (
        <div key={index} className="mb-2">
          <div className="flex items-center">
            <span className="text-cyan-400">guest@palace-os:~$</span>
            <span className="ml-2 text-white">{line.command}</span>
          </div>
          <div>{line.output}</div>
        </div>
      ))}
      
      <form onSubmit={handleFormSubmit} className="flex items-center">
        <label htmlFor="terminal-input" className="text-cyan-400">guest@palace-os:~$</label>
        <input
          ref={inputRef}
          id="terminal-input"
          type="text"
          value={input}
          onChange={handleInputChange}
          className="flex-grow bg-transparent border-none outline-none ml-2 text-white"
          autoComplete="off"
        />
      </form>
      <div ref={scrollRef} />
    </div>
  );
}
