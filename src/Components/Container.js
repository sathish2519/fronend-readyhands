import React from 'react'

function Container({children,className}) {
  return (
    <div>
      <div className={"max-w-screen-xl mx-auto " + className}>{children}</div>
    </div>
  )
}

export default Container
