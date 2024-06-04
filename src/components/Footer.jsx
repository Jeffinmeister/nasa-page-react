import React from 'react'

function Footer(props) {
  const {showModal,handleToggleModal,data}=props
  return (
    <footer>
      <div className='bgGradient'>
      <h1>Project</h1>

        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleToggleModal}>
      <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  )
}

export default Footer