import React from 'react'

function Logout() {
    localStorage.removeItem('studentLoginStatus')
    window.location.href='/userlogin';
    
  return (
    <div>
      
    </div>
  )
}

export default Logout
