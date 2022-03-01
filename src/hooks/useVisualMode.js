import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([]);

  function transition(newMode, replace = false) {
    if (replace === false) {
      setHistory((prev) => [...prev, mode]);
    }
    setMode(newMode);
  }

  function back() {
    if (history.length >= 1) {
      setMode(history.pop());
    }
  }

  return { mode, transition, back };
}
