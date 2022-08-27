import React, {useEffect ,useRef} from 'react'
function Histogram({getPotRef}) {
    const plotRef = useRef()

useEffect(() => {
    getPotRef(plotRef)
}, [plotRef, getPotRef])

  return (
    <div ref={plotRef} style={{width: '500px', height: '500px'}}/>
  )
}

export default Histogram