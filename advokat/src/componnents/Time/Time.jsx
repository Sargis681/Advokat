import React, { useEffect, useState } from 'react'

function Time() {
  const [a, setA] = useState(1000)
  const [t, setT] = useState({
    t: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' }),
    d: new Date().toLocaleDateString()
  })
  useEffect(() => {
    setTimeout(function () {
      setA(a + 1)
      setT({
        t: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' }),
        d: new Date().toLocaleDateString()


      })
      // console.log("hima");
    }, 60000);
  }, [a])

  useEffect(() => {
    return () => {
    }
  }, [])


  return (
    <div>
      {t.t} | {t.d}

    </div>
  )
}

export default Time