import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PortfolioChart = ({ performanceData }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={performanceData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis tickFormatter={value => `$${value.toLocaleString()}`} />
        <Tooltip formatter={value => [`$${value.toLocaleString()}`, 'Value']} />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PortfolioChart;
