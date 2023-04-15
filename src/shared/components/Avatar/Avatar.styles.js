import styled from "styled-components";

export const Container = styled.div`
	width: ${(props) => props.size};
	height: ${(props) => props.size};
	border-radius: 50%;
	margin: ${(props) => props.margin};
	overflow: hidden;

	> img {
		max-width: 100%;
	}
`;
