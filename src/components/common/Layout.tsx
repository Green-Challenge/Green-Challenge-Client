import React from 'react'
import styled from "styled-components"

interface LayoutProps {
	children: React.ReactNode
}

function Layout({children}: LayoutProps) {
	return (
		<Wrapper>
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: fixed;
	bottom: 0;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 360px;
	background-color: white;
`

export {Layout}
