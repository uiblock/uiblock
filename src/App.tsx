import './App.css'
import Button from '#components/button'
import UIBlockProvider from '#components/provider/uiblock-provider'

function App() {
  return (
    <>
      <UIBlockProvider>
        <Button variant='primary'>Welcome to UI Blocks world</Button>
      </UIBlockProvider>
    </>
  )
}

export default App
