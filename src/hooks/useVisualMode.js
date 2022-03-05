import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  /**
   * Function will take in new mode and update the mode state with the new value
   * @param {string} newMode - new mode value
   * @param {boolean} replace - to set the history to reflect whether or not to replace the current mode
   */
  function transition(newMode, replace = false) {
    if (replace === false) {
      setHistory((prev) => [...prev, mode]);
      setMode(newMode);
    } else {
      setHistory((prev) => [...prev, newMode]);
      setMode(newMode);
    }
  }

  /**
   * Function to transition back to our previous mode
   */
  function back() {
    if (history.length >= 1) {
      history.pop();
    }
    setMode(history.pop());
  }

  return { mode, transition, back };
}
