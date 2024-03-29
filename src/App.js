import React, { useState } from 'react';

function calculateAttendance(currentPercentage, hoursAttendedExtra, totalHoursPerWeek) {
  // Calculate total hours for a semester (15 weeks in a semester)
  const totalHoursPerSemester = totalHoursPerWeek * 13;

  // Calculate hours attended
  const hoursAttended = (currentPercentage / 100) * totalHoursPerSemester;

  // Calculate new hours attended after attending extra classes
  const newHoursAttended = hoursAttended + hoursAttendedExtra;

  // Calculate new attendance percentage
  const newPercentage = (newHoursAttended / totalHoursPerSemester) * 100;

  return newPercentage;
}

function App() {
  const [currentPercentage, setCurrentPercentage] = useState(null);
  const [hoursAttendedExtra, setHoursAttendedExtra] = useState(null);
  const [totalHoursPerWeek, setTotalHoursPerWeek] = useState(null);
  const [newPercentage, setNewPercentage] = useState(0);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    if (!currentPercentage || !hoursAttendedExtra || !totalHoursPerWeek) {
      setError('All fields are required');
      setNewPercentage(0);
      return;
    }else{
      const result = calculateAttendance(currentPercentage, hoursAttendedExtra, totalHoursPerWeek);
      setNewPercentage(result);
      setCurrentPercentage('');
      setHoursAttendedExtra('');
      setTotalHoursPerWeek('');
      setError(null);
    } 
    }
   

  return (
    <div className="container">
    <h1>Attendance Calculator</h1>
    <div className="input-container">
      <label>
        Current Attendance Percentage:
        <input type="number" value={currentPercentage} onChange={(e) => setCurrentPercentage(parseFloat(e.target.value))} />
      </label>
    </div>
    <div className="input-container">
      <label>
        Hours to miss:
        <input type="number" value={hoursAttendedExtra} onChange={(e) => setHoursAttendedExtra(parseFloat(e.target.value))} />
      </label>
    </div>
    <div className="input-container">
      <label>
        Total Hours Per Week:
        <input type="number" value={totalHoursPerWeek} onChange={(e) => setTotalHoursPerWeek(parseFloat(e.target.value))} />
      </label>
    </div>
    <button className="button" onClick={handleCalculate}>Calculate</button>
    {error && <div className="error">{error}</div>}
    {newPercentage !== 0 && (
      <div className="result">New Attendance Percentage: {newPercentage.toFixed(2)}%</div>
    )}
  </div>
  );
}

export default App;
