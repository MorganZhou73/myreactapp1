import React from 'react';
import StockPriceChart from './StockPriceChart';
import CandlestickChart from './CandlestickChart';

const ohlcData = [
    {
        date: '2024-01-01',
        open: 150.00,
        high: 152.50,
        low: 149.75,
        close: 151.25,
        volume: 1000000
    },
    {
        date: '2024-01-02',
        open: 151.50,
        high: 153.75,
        low: 150.25,
        close: 152.80,
        volume: 1200000
    },
    {
        date: '2024-01-03',
        open: 152.80,
        high: 154.20,
        low: 151.50,
        close: 153.50,
        volume: 950000
    },
    {
        date: '2024-01-04',
        open: 153.25,
        high: 155.00,
        low: 152.00,
        close: 154.75,
        volume: 1100000
    },
    {
        date: '2024-01-05',
        open: 154.50,
        high: 156.25,
        low: 153.75,
        close: 155.20,
        volume: 1300000
    },
    {
        date: '2024-01-08',
        open: 155.00,
        high: 157.50,
        low: 154.25,
        close: 156.80,
        volume: 1400000
    },
    {
        date: '2024-01-09',
        open: 156.50,
        high: 158.75,
        low: 155.80,
        close: 157.25,
        volume: 1250000
    },
    {
        date: '2024-01-10',
        open: 157.00,
        high: 159.20,
        low: 156.25,
        close: 158.50,
        volume: 1150000
    },
    {
        date: '2024-01-11',
        open: 158.25,
        high: 160.00,
        low: 157.50,
        close: 159.75,
        volume: 1350000
    },
    {
        date: '2024-01-12',
        open: 159.50,
        high: 161.25,
        low: 158.75,
        close: 160.20,
        volume: 1450000
    }
];

const intradayData = [
    {
        timestamp: '2024-01-12T09:30:00',
        open: 159.50,
        high: 159.80,
        low: 159.20,
        close: 159.60,
        volume: 50000
    },
    {
        timestamp: '2024-01-12T10:00:00',
        open: 159.60,
        high: 160.20,
        low: 159.40,
        close: 160.00,
        volume: 75000
    },
    {
        timestamp: '2024-01-12T10:30:00',
        open: 160.00,
        high: 160.50,
        low: 159.80,
        close: 160.25,
        volume: 60000
    },
    {
        timestamp: '2024-01-12T11:00:00',
        open: 160.25,
        high: 160.75,
        low: 160.00,
        close: 160.50,
        volume: 55000
    },
    {
        timestamp: '2024-01-12T11:30:00',
        open: 160.50,
        high: 161.00,
        low: 160.25,
        close: 160.80,
        volume: 70000
    },
    {
        timestamp: '2024-01-12T12:00:00',
        open: 160.80,
        high: 161.25,
        low: 160.60,
        close: 161.00,
        volume: 65000
    }
];

const dataWithIndicators = [
    {
        date: '2024-01-01',
        open: 150.00,
        high: 152.50,
        low: 149.75,
        close: 151.25,
        volume: 1000000,
        sma20: 148.50,
        sma50: 145.80,
        ema12: 149.80,
        ema26: 147.20,
        rsi: 58.2,
        macd: 0.45,
        bollingerUpper: 153.20,
        bollingerLower: 146.80
    },
    {
        date: '2024-01-02',
        open: 151.50,
        high: 153.75,
        low: 150.25,
        close: 152.80,
        volume: 1200000,
        sma20: 149.20,
        sma50: 146.10,
        ema12: 150.60,
        ema26: 147.80,
        rsi: 62.5,
        macd: 0.52,
        bollingerUpper: 154.10,
        bollingerLower: 147.40
    },
    // ... more data with indicators
];

// Processed for Recharts - needs range and openClose arrays
const rechartsCandlestickData = [
    {
        date: '2024-01-01',
        open: 150.00,
        high: 152.50,
        low: 149.75,
        close: 151.25,
        volume: 1000000,
        range: [149.75, 152.50],     // [low, high]
        openClose: [150.00, 151.25]  // [open, close]
    },
    {
        date: '2024-01-02',
        open: 151.50,
        high: 153.75,
        low: 150.25,
        close: 152.80,
        volume: 1200000,
        range: [150.25, 153.75],
        openClose: [151.50, 152.80]
    },
    {
        date: '2024-01-03',
        open: 152.80,
        high: 154.20,
        low: 151.50,
        close: 153.50,
        volume: 950000,
        range: [151.50, 154.20],
        openClose: [152.80, 153.50]
    }
];

function generateSampleData(days = 30, basePrice = 150, volatility = 2) {
    const data = [];
    let currentDate = new Date('2024-01-01');
    let previousClose = basePrice;

    for (let i = 0; i < days; i++) {
        const open = previousClose;
        const change = (Math.random() - 0.5) * volatility;
        const high = open + Math.abs(change) + Math.random() * 1.5;
        const low = open - Math.abs(change) - Math.random() * 1.5;
        const close = open + change;
        const volume = Math.floor(1000000 + Math.random() * 500000);

        data.push({
            date: currentDate.toISOString().split('T')[0],
            open: parseFloat(open.toFixed(2)),
            high: parseFloat(high.toFixed(2)),
            low: parseFloat(low.toFixed(2)),
            close: parseFloat(close.toFixed(2)),
            volume: volume,
            range: [parseFloat(low.toFixed(2)), parseFloat(high.toFixed(2))],
            openClose: [parseFloat(open.toFixed(2)), parseFloat(close.toFixed(2))]
        });

        previousClose = close;
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return data;
}

const appleData = [
    { date: '2024-01-01', open: 185.50, high: 187.25, low: 184.75, close: 186.80, volume: 45000000 },
    { date: '2024-01-02', open: 186.80, high: 188.50, low: 186.20, close: 187.90, volume: 48000000 },
    { date: '2024-01-03', open: 187.50, high: 189.75, low: 187.00, close: 188.25, volume: 52000000 }
];

const teslaData = [
    { date: '2024-01-01', open: 245.00, high: 252.50, low: 242.75, close: 250.80, volume: 35000000 },
    { date: '2024-01-02', open: 250.50, high: 255.75, low: 248.25, close: 253.20, volume: 38000000 },
    { date: '2024-01-03', open: 253.00, high: 258.20, low: 251.50, close: 256.75, volume: 42000000 }
];

const processDataForRecharts = (ohlcData) => {
    return ohlcData.map(item => ({
        ...item,
        range: [item.low, item.high],
        openClose: [item.open, item.close],
        // Color for bullish/bearish
        color: item.close >= item.open ? '#4caf50' : '#f44336'
    }));
};

function Stock() {
    // Sample data
    const stockData = [
        { timestamp: '2024-01-01T09:30:00', price: 150.25, volume: 100000 },
        { timestamp: '2024-01-01T10:00:00', price: 151.50, volume: 120000 },
        { timestamp: '2024-01-01T10:30:00', price: 152.75, volume: 150000 },
        // ... more data
    ];

    const chartData = processDataForRecharts(appleData);

    return (
        <>
            <StockPriceChart data={stockData} />
            <CandlestickChart ohlcData={chartData} />
        </>

    );
}

export default Stock;