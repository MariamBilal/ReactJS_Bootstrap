import React from 'react'

export default function Alert(props) {
    console.log(props.alert)
  return (
   
    props.alert && <div class={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
        <div>
            <strong>{props.alert.type}</strong> {props.alert.msg}
        </div>
    </div>
  )
}
