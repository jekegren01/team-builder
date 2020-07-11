import React, { useState } from 'react';
import './App.css';
import Form from 'Form';

function App() {
  const defaultTeamMembersList = {name: '', email: '', role: ''};
  const [teamMembersList, setTeamMembersList] = useState(defaultTeamMembersList);
  
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
