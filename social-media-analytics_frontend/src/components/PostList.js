import React from 'react';

const PostList = ({ posts }) => (
    <div>
        {posts.map(post => (
            <div key={post.id}>
                <p>{post.content}</p>
                <p>Likes: {post.likes}</p>
                <p>Comments: {post.comments}</p>
                <p>Shares: {post.shares}</p>
            </div>
        ))}
    </div>
);

export default PostList;
