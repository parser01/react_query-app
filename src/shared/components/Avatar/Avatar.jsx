import { Container } from "./Avatar.styles";

export function Avatar({ src, alt, ...props }) {
	return (
		<Container {...props}>
			<img src={src} alt={alt} />
		</Container>
	);
}
