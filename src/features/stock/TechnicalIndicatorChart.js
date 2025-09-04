import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TechnicalIndicatorChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="sma20" stroke="#ff7300" strokeWidth={1.5} dot={false} />
                <Line type="monotone" dataKey="sma50" stroke="#387908" strokeWidth={1.5} dot={false} />
                <Line type="monotone" dataKey="rsi" stroke="#ff0000" strokeWidth={1.5} dot={false} yAxisId="right" />
            </LineChart>
        </ResponsiveContainer>
    );
};