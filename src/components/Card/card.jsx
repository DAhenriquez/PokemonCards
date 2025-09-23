import { Card, Text, Image} from "@mantine/core";
import './card.css';



function CardComponent({ card }) {
  return (
<Card shadow="sm" padding="md" radius="md" withBorder bg='#006691' className='card'>
    <Card.Section>
        <Image
            src={card.image + '/high.png'}
            alt={card.name}
            fit="contain"
       />
    </Card.Section>
    <Text ta="center" mt="sm" fw={700} c='white'>
        {card.name}
    </Text>
</Card>
    );
}

export default CardComponent;