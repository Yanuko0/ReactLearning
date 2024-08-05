// react + ts
import { useState } from "react"

// type Props = {
//   className: string
// }

interface Props {
    className: string
    title?: string
}

function Button(props: Props){
  const { className } = props
  return <button className={className}>click me</button>
}

function App() {

  return (
    <>
    <Button className="test" title="this is title"/>
    </>
  )
}

export default App
