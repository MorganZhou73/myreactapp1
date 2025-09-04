import React from 'react';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CandlestickChart = ({ ohlcData }) => {
    return (
        <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={ohlcData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />

                {/* Candlestick bars */}
                <Bar yAxisId="left" dataKey="range" fill="#8884d8" />
                <Bar yAxisId="left" dataKey="openClose" fill="#333" />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default CandlestickChart;
