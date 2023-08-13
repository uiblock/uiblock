import darkTheme from '#design/public-tokens.css'
import { globalStyle } from '@vanilla-extract/css'

/*
 **************************************************************************
  Josh's Custom CSS Reset https://www.joshwcomeau.com/css/custom-css-reset/
 **************************************************************************
*/

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
})

globalStyle('html, body', { height: '100%' })

globalStyle('body', {
  lineHeight: '1.5',
  WebkitFontSmoothing: 'antialiased',
  fontFamily: 'system-ui, sans-serif',
  background: darkTheme.color.default, // TODO: remove me and control it through a prop
})

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
})

globalStyle('input, button, textarea, select', { font: 'inherit' })

globalStyle('p, h1, h2, h3, h4, h5, h6', { overflowWrap: 'break-word' })

globalStyle('#root', { isolation: 'isolate' }) // TODO: don't how to pass css selector as a variable here?
