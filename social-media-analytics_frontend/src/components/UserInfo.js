import React from 'react';

const UserInfo = ({ user }) => (
    <div>
        <h2>{user.name}</h2>
        <p>Category: {user.category}</p>
        <p>Bio: {user.bio}</p>
        <p>Contact: {user.contact}</p>
        <a href={user.links}>Links</a>
    </div>
);

export default UserInfo;
