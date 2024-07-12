import React from 'react';

const Analytics = ({ analytics }) => (
    <div>
        <p>Followers: {analytics.followers}</p>
        <p>Following: {analytics.following}</p>
        <p>Posts: {analytics.posts}</p>
        <p>Account Reached: {analytics.accountReached}</p>
        <p>Account Engaged: {analytics.accountEngaged}</p>
        <p>Content Shared: {analytics.contentShared}</p>
        <p>Ads Run: {analytics.adsRun}</p>
        <p>Active Promotions: {analytics.activePromotions}</p>
        <p>Total Stories: {analytics.totalStories}</p>
        <p>Total Follows: {analytics.totalFollows}</p>
        <p>Total Saves: {analytics.totalSaves}</p>
        <p>Total Comments: {analytics.totalComments}</p>
        <p>Total Shares: {analytics.totalShares}</p>
    </div>
);

export default Analytics;
