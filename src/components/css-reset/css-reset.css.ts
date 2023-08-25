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

globalStyle('html', {
  /* Load system fonts */
  fontFamily: darkTheme.font.family.system, // TODO: pass a prop

  /* Make type rendering look crisper */
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',

  /* Deactivate auto-enlargement of small text in Safari */
  textSizeAdjust: '100%',

  /* Enable kerning and optional ligatures */
  textRendering: 'optimizeLegibility',
})

globalStyle('body', {
  lineHeight: '1.5',
  background: darkTheme.color.gray[100], // TODO: pass prop instead
  color: darkTheme.color.gray[1000], // TODO: pass prop instead
})

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
})

globalStyle('input, button, textarea, select', { font: 'inherit' })

globalStyle('p, h1, h2, h3, h4, h5, h6', { overflowWrap: 'break-word' })

globalStyle('#root', { isolation: 'isolate' }) // TODO: don't how to pass css selector as a variable here?
