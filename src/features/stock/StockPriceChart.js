import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StockPriceChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="timestamp"
                    tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString()}
                />
                <YAxis domain={['auto', 'auto']} />
                <Tooltip
                    formatter={(value) => [`$${value.toFixed(2)}`, 'Price']}
                    labelFormatter={(label) => new Date(label).toLocaleString()}
                />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6 }}
                />
                <Line
                    type="monotone"
                    dataKey="volume"
                    stroke="#82ca9d"
                    strokeWidth={2}
                    yAxisId="right"
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default StockPriceChart;