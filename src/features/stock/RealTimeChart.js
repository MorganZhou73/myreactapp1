import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RealTimeChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            // Simulate real-time data
            const newDataPoint = {
                timestamp: new Date(),
                price: 150 + Math.random() * 10,
                volume: 100000 + Math.random() * 50000
            };

            setData(prevData => [...prevData.slice(-99), newDataPoint]); // Keep last 100 points
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="timestamp"
                    tickFormatter={(time) => new Date(time).toLocaleTimeString()}
                />
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={false} // Disable animation for real-time
                />
            </LineChart>
        </ResponsiveContainer>
    );
};