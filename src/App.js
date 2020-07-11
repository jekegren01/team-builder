import React, { useState } from 'react';
import './App.css';
import Form from 'Form';
import TeamMembers from 'TeamMembers';

function App() {
  const defaultTeamMembersList = {name: '', email: '', role: ''};
  const [teamMembers, setTeamMembers] = useState(defaultTeamMembersList);
  
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers}/>
      <TeamMembers teamMembers={teamMembers}/>
    </div>
  );
};

export default App;
