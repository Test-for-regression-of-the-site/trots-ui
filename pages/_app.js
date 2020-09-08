import App from 'next/app'
import React from 'react'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	#__next {
		height: 100%;
	}
	html {
		height: 100%;
	}
	body {
		background-color: #FFFFFF;
		margin: 0px;
		width: 100%;
		height: 100%;
	}
`

export default class MyApp extends App {
	render () {
		const { Component, pageProps } = this.props
		return (
			<>
				<Component {...pageProps} />
				<GlobalStyle />
			</>
		)
	}
}