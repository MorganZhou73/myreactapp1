const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip" style={{
                backgroundColor: '#fff',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
            }}>
                <p>{`Date: ${new Date(label).toLocaleString()}`}</p>
                <p style={{ color: '#8884d8' }}>{`Price: $${payload[0].value.toFixed(2)}`}</p>
                {payload[1] && <p style={{ color: '#82ca9d' }}>{`Volume: ${payload[1].value.toLocaleString()}`}</p>}
            </div>
        );
    }
    return null;
};

// Usage in chart:
<Tooltip content={<CustomTooltip />} />