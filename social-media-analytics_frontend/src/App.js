import React, { useEffect, useState } from 'react';
import UserInfo from './components/UserInfo';
import PostList from './components/PostList';
import Analytics from './components/Analytics';
import { getUser } from './services/userService';
import { getPosts } from './services/postService';
import { getAnalytics } from './services/analyticsService';

const App = () => {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [analytics, setAnalytics] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const userData = await getUser(1); // assuming user id 1
            setUser(userData);

            const postData = await getPosts(1); // assuming user id 1
            setPosts(postData);

            const analyticsData = await getAnalytics(1); // assuming user id 1
            setAnalytics(analyticsData);
        };

        fetchData();
    }, []);

    return (
        <div>
            <UserInfo user={user} />
            <PostList posts={posts} />
            <Analytics analytics={analytics} />
        </div>
    );
};

export default App;
