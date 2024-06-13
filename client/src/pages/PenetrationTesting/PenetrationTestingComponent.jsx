import React, { useRef, useState } from 'react';
import { Button, Card, Input, Alert, Tabs, Statistic, Row, Col, Typography, Tooltip, Space } from 'antd';
import { InfoCircleOutlined, LoadingOutlined, SearchOutlined } from '@ant-design/icons';
import './PenetrationTestingComponent.css';
import useTestingData from './../../hooks/testing';

const { TabPane } = Tabs;

function PenetrationTestingComponent() {
  const { loading, error, getTestingData } = useTestingData();
  const [res, setRes] = useState(null);
  const [url, setUrl] = useState('');
  const [inputError, setInputError] = useState(false);

  const handleTestClick = async () => {
    if (!url) {
      setInputError(true);
      return;
    }
    setInputError(false);
    try {
      const result = await getTestingData({ url });
      console.log(result);
      setRes(result);
    } catch (err) {
      console.error(err);
    }
  };

  const getRiskCounts = () => {
    const riskCounts = { High: 0, Medium: 0, Low: 0, Informational: 0 };
    if (res) {
      res.forEach(item => {
        riskCounts[item.risk] += 1;
      });
    }
    return riskCounts;
  };

  const riskCounts = getRiskCounts();

  return (
    <div>
      <Card className="testing-card container image center mt-5" bordered={false}>
        <Typography.Title level={2} className="text-center">Penetration Testing Tool</Typography.Title>
        <Typography.Paragraph className="description-text">
          Enter a URL to assess its security. This tool uses state-of-the-art techniques to identify and report potential vulnerabilities.
        </Typography.Paragraph>
        <Space direction="vertical" size="large" className="input-space">
          <Input 
            addonBefore={<Tooltip title="Enter full URL including http or https"><InfoCircleOutlined /></Tooltip>}
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="Enter URL" 
            className="url-input"
            prefix={<SearchOutlined style={{ color: 'rgba(0, 0, 0, 0.45)' }} />}
            suffix={loading ? <LoadingOutlined spin /> : null}
          />
          <Button type="ghost" block onClick={handleTestClick} loading={loading} className="run-test-button" disabled={!url}>
            Run Test
          </Button>
        </Space>
        {inputError && (
          <Alert message="Please enter a URL first." type="error" showIcon className="error-alert" />
        )}
        {error && (
          <Alert message="Error processing your request." type="error" showIcon className="error-alert" />
        )}
        {!loading && res && (
          <div className="results-container mt-5">
            <Tabs defaultActiveKey="1" animated>
              <TabPane tab={`Vulnerabilities Found (${res.length})`} key="1">
                <Row gutter={16}>
                  <Col span={6}>
                    <Statistic title="High" value={riskCounts.High} valueStyle={{ color: '#cf1322' }} />
                  </Col>
                  <Col span={6}>
                    <Statistic title="Medium" value={riskCounts.Medium} valueStyle={{ color: '#faad14' }} />
                  </Col>
                  <Col span={6}>
                    <Statistic title="Low" value={riskCounts.Low} valueStyle={{ color: '#52c41a' }} />
                  </Col>
                  <Col span={6}>
                    <Statistic title="Informational" value={riskCounts.Informational} />
                  </Col>
                </Row>
                <div className="vulnerabilities-list mt-1">
                  {res.map(data => (
                    <Card key={data.id} title={`Vulnerability: ${data.name}`} className="vulnerability-card">
                      <p><strong>ID:</strong> {data.id}</p>
                      <p><strong>Confidence:</strong> {data.confidence}</p>
                      <p><strong>Risk:</strong> {data.risk}</p>
                      <p><strong>Method:</strong> {data.method}</p>
                      <p><strong>Solution:</strong> {data.solution}</p>
                      <p><strong>Alert:</strong> {data.alert}</p>
                      <p><strong>Description:</strong> {data.description}</p>
                      <p><strong>Evidence:</strong> {data.evidence}</p>
                      <p><strong>URL:</strong> <a href={data.url} target="_blank" rel="noopener noreferrer">{data.url}</a></p>
                    </Card>
                  ))}
                </div>
              </TabPane>
            </Tabs>
          </div>
        )}
      </Card>
    </div>
  );
}

export default PenetrationTestingComponent;
