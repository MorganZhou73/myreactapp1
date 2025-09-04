import React from 'react';
import { BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const VolumePriceChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" orientation="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        
        <Bar yAxisId="left" dataKey="volume" fill="#8884d8" />
        <Line yAxisId="right" type="monotone" dataKey="price" stroke="#ff7300" strokeWidth={2} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VolumePriceChart;
