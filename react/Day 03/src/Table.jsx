import React from 'react'

export default function Table({ formData }) {
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>S No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Message</th>
        </tr>
      </thead>

      <tbody>
        {
          formData.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>{user.message}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}