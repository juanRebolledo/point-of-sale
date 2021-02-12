import React from 'react'

const Error = ({ children, text }) => (
  <div className="align-items-center d-flex flex-column pt-5 text-danger h-100">
    <h2>{text}</h2>
    <img src="https://media.giphy.com/media/xT5LMLMPdRh2VRNVLi/giphy.gif" alt="" className="col-md-3" />
    {children}
  </div>
)

export default Error
