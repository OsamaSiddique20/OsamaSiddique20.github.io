import React, { useState } from 'react';

function calculateAttendance(currentPercentage, hoursAttendedExtra, totalHoursPerWeek) {
  // Calculate total hours for a semester (15 weeks in a semester)
  const totalHoursPerSemester = totalHoursPerWeek * 15;

  // Calculate hours attended
  const hoursAttended = (currentPercentage / 100) * totalHoursPerSemester;

  // Calculate new hours attended after attending extra classes
  const newHoursAttended = hoursAttended + hoursAttendedExtra;

  // Calculate new attendance percentage
  const newPercentage = (newHoursAttended / totalHoursPerSemester) * 100;

  return newPercentage;
}

function App() {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [hoursAttendedExtra, setHoursAttendedExtra] = useState(0);
  const [totalHoursPerWeek, setTotalHoursPerWeek] = useState(0);
  const [newPercentage, setNewPercentage] = useState(0);

  const handleCalculate = () => {
    const result = calculateAttendance(currentPercentage, hoursAttendedExtra, totalHoursPerWeek);
    setNewPercentage(result);
    setCurrentPercentage('');
    setHoursAttendedExtra('');
    setTotalHoursPerWeek('');
  };

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
        Hours Attended Extra:
        <input type="number" value={hoursAttendedExtra} onChange={(e) => setHoursAttendedExtra(parseInt(e.target.value))} />
      </label>
    </div>
    <div className="input-container">
      <label>
        Total Hours Per Week:
        <input type="number" value={totalHoursPerWeek} onChange={(e) => setTotalHoursPerWeek(parseInt(e.target.value))} />
      </label>
    </div>
    <button className="button" onClick={handleCalculate}>Calculate</button>
    {newPercentage !== 0 && (
      <div className="result">New Attendance Percentage: {newPercentage.toFixed(2)}%</div>
    )}
  </div>
  );
}

export default App;
