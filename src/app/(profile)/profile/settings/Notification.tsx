"use client"
import { useState } from 'react';

const Notification = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [weeklySummary, setWeeklySummary] = useState(true);

    return (
        <div className="bg-card border border-gray-700/50 rounded-lg p-4">
            <h2 className="text-main font-semibold text-subheading">Notifications</h2>
            <p className="text-title text-paragraph">Manage how you receive notifications</p>

            <div className="space-y-6 mt-4">
                {/* Email Notifications */}
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <h3 className="text-main font-medium text-paragraph">Email Notifications</h3>
                        <p className="text-title text-sm">Receive email when students submit quizzes</p>
                    </div>
                    <button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                            emailNotifications
                                ? 'bg-header text-gray-900 hover:bg-header/90'
                                : ' text-gray-400 hover:bg-gray-700 border border-gray-700/50'
                        }`}
                    >
                        {emailNotifications ? 'Enabled' : 'Disabled'}
                    </button>
                </div>

                {/* Weekly Summary */}
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <h3 className="text-main font-medium text-paragraph">Weekly Summary</h3>
                        <p className="text-title text-sm">Get a weekly summary of quiz performance</p>
                    </div>
                    <button
                        onClick={() => setWeeklySummary(!weeklySummary)}
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                            weeklySummary
                                ? 'bg-header text-gray-900 hover:bg-header/90'
                                : 'text-gray-400 hover:bg-gray-700 border border-gray-700/50'
                        }`}
                    >
                        {weeklySummary ? 'Enabled' : 'Disabled'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Notification;