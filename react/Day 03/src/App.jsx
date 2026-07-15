
import React, { useState } from 'react'
import Form from './Form'
import Table from './Table'

export default function App() {
  const [formData, setFormData] = useState([]);

  function addUser(data) {
    setFormData([...formData, data])
  }


  return (
    <>
      <Form addUser={addUser} />
      <Table formData={formData} />
    </>
  )
}
