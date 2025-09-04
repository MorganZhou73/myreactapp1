import React from 'react';
import { Row, Col } from 'antd'; // or use CSS grid/flexbox

const TradingDashboard = ({ priceData, volumeData, indicatorData }) => {
    return (
        <div style={{ padding: '20px' }}>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <StockPriceChart data={priceData} />
                </Col>
                <Col span={12}>
                    <VolumePriceChart data={volumeData} />
                </Col>
                <Col span={12}>
                    <TechnicalIndicatorChart data={indicatorData} />
                </Col>
            </Row>
        </div>
    );
};

export default TradingDashboard;
