import styled from "styled-components";

export const Tab = styled.div`
	padding: 12px 16px;
	border-bottom: 2px solid transparent;
	cursor: pointer;
	color: #fff;
	font-size: 16px;
	font-weight: 500;
	line-height: 1.2;
	text-align: center;
	text-transform: uppercase;
	transition: all 0.2s ease-in-out;

	${({ active, activeColor }) =>
		active &&
		`
      color: ${activeColor || "yellow"};
      border-bottom: ${
			activeColor ? `2px solid ${activeColor}` : "2px solid #fff"
		};
   `}
`;
