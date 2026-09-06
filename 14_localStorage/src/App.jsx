import React from 'react'

const App = () => {

  // localStorage.clear()
  // sessionStorage.clear()
  // localStorage.setItem('user','tehreem')
  // const user=localStorage.getItem('user')
  // localStorage.removeItem('user')
// const users = {
//   username: 'Tehreem',
//   age: 18,
//   city: 'Karachi'
// }

// localStorage.setItem('users', JSON.stringify(users))

const user = JSON.parse(localStorage.getItem('users'))

console.log(user);

  
  return (
    <div>App</div>
  )
}

export default App