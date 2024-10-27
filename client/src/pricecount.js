// PricingCounts.js
import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { backend } from './url'; // Adjust the path based on your project structure

const PricingCounts = () => {
    const [priceCounts, setPriceCounts] = useState({ 1000: 0, 2500: 0, 5000: 0 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPriceCounts = async () => {
            try {
                const response = await fetch(`${backend}/prices`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setPriceCounts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPriceCounts();
    }, []);

    return (
 <Container className="mt-5" >
        <h2 className="text-center mb-4">Pricing .....</h2>
            {loading && <p>Loading...</p>}


            {error && <p className="text-danger">{error}</p>}
            <Row>
     <Col md={4}>
        <Card className="text-center p-3">
              <Card.Body>
                <Card.Title>Basic</Card.Title>
                    <Card.Text>
            Purchased Count: {priceCounts[1000]}
            </Card.Text>
                <Card.Text>
            Price:₹1000</Card.Text>
 </Card.Body>
        </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center p-3  shadow">
                        <Card.Body>
                   
                   
         <Card.Title>Pro</Card.Title>
                            <Card.Text>
                                Purchased Count: {priceCounts[2500]}
                            </Card.Text>
                            <Card.Text>
            Price:₹2500
                              
            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

    <Col md={4}>
                    <Card className="text-center p-3">
             <Card.Body>
                            <Card.Title>Enterprise</Card.Title>
                            <Card.Text>
                                Purchased Count: {priceCounts[5000]}
                              
            </Card.Text>
            <Card.Text>
            Price:₹5000
                              
            </Card.Text>
        
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PricingCounts;
