import { FC } from 'react';
import { Body, Container, Head, Html, Text } from '@react-email/components';

export const Template: FC = () => (
	<Html>
		<Head />
		<Body>
			<Container>
				<Text>Test</Text>
			</Container>
		</Body>
	</Html>
);

export default Template;
