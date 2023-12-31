import React, { useState } from 'react'

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: '#042743',
    backgroundColor: 'white',
    // border: '2px solid white'
  })
  const [btntext, setBtnText] = useState("Enable Dark Mode")
  const toggleStyle = ()=>{
    if(myStyle.color == 'white'){
      setMyStyle({
        color: '#042743',
        backgroundColor: 'white'
      })
      setBtnText("Enable Light Mode")
    }
    else{
        setMyStyle({
            color: 'white',
            backgroundColor: '#042743'
        })
      setBtnText("Enable Dark Mode");
    }
  }

  return (
    <div className="container" style={myStyle}>
      <h1 className='my-2' >About Us</h1>
      <div className="accordion" id="accordionExample" >
  <div className="card"  >
    <div className="card-header" id="headingOne"  style={myStyle}>
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left"  style={myStyle} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample"  style={myStyle} >
      <div className="card-body">
        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo"  style={myStyle} >
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed"  style={myStyle} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample"  style={myStyle} >
      <div className="card-body">
        Some placeholder content for the second accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree"  style={myStyle}>
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed"  style={myStyle} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample"  style={myStyle}>
      <div className="card-body">
        And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
<button onClick={toggleStyle} type="button" className="btn btn-primary" >{btntext}</button>

</div>
    </div>
  )
}
