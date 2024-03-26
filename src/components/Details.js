import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {

  let {id} = useParams()

  return (
    <div>{id}</div>
  )
}

export default Details