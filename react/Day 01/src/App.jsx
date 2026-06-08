import React from 'react'
import Button from './Btn'

export default function App() {
  return (
    <>
      <Button bgColor="green" myclass="border p-2" text="Call Now" />
      <Button bgColor="orange" textColor="white" text=" Now" />
      <Button bgColor="black" textColor="green" text="Enquiry Now" />
      <Button bgColor="pink" textColor="green" text="Submit" />
      <Button bgColor="orange" textColor="pink" text="Apply" />
    </>
  )
}
