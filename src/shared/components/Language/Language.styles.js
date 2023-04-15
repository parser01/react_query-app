import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 5px;
	background-color: #2f3239;
	margin: ${(props) => props.margin};
`;
