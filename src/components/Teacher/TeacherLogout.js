import React from 'react'

function TeacherLogout() {
    localStorage.removeItem('teacherLoginStatus')
    window.location.href='/teacherlogin';
    
  return (
    <div>
      
    </div>
  )
}

export default TeacherLogout
