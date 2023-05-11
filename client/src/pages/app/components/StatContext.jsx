import { useState, createContext } from "react";

const StatContext = createContext();

export function StatProvider({ children }) {
  const [statLevel, setStatLevel] = useState({
    Strength: 0,
    Intelligence: 0,
    Health: 0,
    Charisma: 0,
    Creativity: 0,
  });

  const handleStatLevel = (selectedStat) => {
    const stats = statLevel;
    console.log(selectedStat);
    stats[selectedStat] += 20;
    setStatLevel(stats);
    console.log(statLevel);
  };

  return (
    <StatContext.Provider value={{ statLevel, handleStatLevel }}>
      {children}
    </StatContext.Provider>
  );
}

export default StatContext;
