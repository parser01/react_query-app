import styled from "styled-components";

export const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${(props) => props.width || "auto"};
	height: ${(props) => props.height || "auto"};
	border: ${(props) => props.border || "none"};
	border-radius: ${(props) => props.borderRadius || "0"};
	margin: ${(props) => props.margin};
	background-color: ${(props) => props.backgroundColor || "transparent"};
	color: ${(props) => props.color || "#000"};
	font-size: ${(props) => props.fontSize || "16px"};
	font-weight: ${(props) => props.fontWeight || "400"};

	> span:first-child {
		display: flex;
		align-items: center;
		margin-right: 8px;
	}

	> span:last-child {
		display: flex;
		align-items: center;
		margin-left: 8px;
	}
`;
