import React from 'react'

type buttonProps={
    variant?:"primary" | "secondary" | "danger",
    size?:"sm"|"md"| "lg",
    label:string
}

const Button = ({variant="primary",size="md",label}:buttonProps) => {
  return (
    <>
    <button className={`${variant} ${size}`}>{label}</button>
    </>
  )
}

export default Button