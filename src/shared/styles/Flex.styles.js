import styled from "styled-components";

export const Flex = styled.div`
	display: flex;
	flex-direction: ${(props) => props.direction || "row"};
	justify-content: ${(props) => props.justify || "flex-start"};
	align-items: ${(props) => props.align || "stretch"};
	flex-wrap: ${(props) => props.wrap || "nowrap"};
	flex-grow: ${(props) => props.grow || "0"};
	flex-shrink: ${(props) => props.shrink || "1"};
	flex-basis: ${(props) => props.basis || "auto"};
	align-self: ${(props) => props.self || "auto"};
	order: ${(props) => props.order || "0"};
	padding: ${(props) => props.padding};
	margin: ${(props) => props.margin};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	max-width: ${(props) => props.maxWidth};
	min-width: ${(props) => props.minWidth};
`;
