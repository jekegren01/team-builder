import React from 'react';

const TeamMembers = props => {
    return (
        <div className='teamMembersList'>
                <div className='title'>
                    <h2>Name</h2>
                    <p className='middleTitle'>Email</p>
                    <p>Role</p>
                </div>
            {props.teamMembers.map((teamMember, i) => (
                <div className='teamMember' key={i}>
                    <h2>{teamMember.name}</h2>
                    <p className='middleTitle'>{teamMember.email}</p>
                    <p>{teamMember.role}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamMembers;