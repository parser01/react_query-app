import styled from "styled-components";

export const Container = styled.div`
	padding: ${(props) => props.padding};
	margin: ${(props) => props.margin};
	color: ${(props) => props.color || "#000"};
	font-size: ${(props) => props.size || "16px"};
	font-weight: ${(props) => props.weight || "400"};
	line-height: ${(props) => props.lineHeight || "1.5"};
	text-align: ${(props) => props.align};
	text-transform: ${(props) => props.transform};
	letter-spacing: ${(props) => props.spacing};
`;
