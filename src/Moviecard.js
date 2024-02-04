import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Moviecard({item}) {
    return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item&&item.img} />
    <Card.Body>
        <Card.Title>{item&&item.name}</Card.Title>
        <Button variant="primary">{item&&item.rate}</Button>
    </Card.Body>
    </Card>
);
}

export default Moviecard;