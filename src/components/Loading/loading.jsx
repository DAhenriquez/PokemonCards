import { Text, Loader } from '@mantine/core';
import './loading.css';

function Loading({ text }) {
    return (
        <div className="loading">
        <Text size="lg" ta="center" fw={700} c='#006691'>
            {text}
        </Text>
        <Loader color="blue" type="dots" />
        </div>
    );
}

export default Loading;
