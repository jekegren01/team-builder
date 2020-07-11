import React from 'react';

const TeamMembers = props => {
    return (
        <div className='teamMembersList'>
            {props.teamMembers.map((teamMember, i) => (
                <div className='teamMember' key={i}>
                    <h2>{teamMember.name}</h2>
                    <p>{teamMember.email}</p>
                    <p>{teamMember.role}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamMembers;