import React from 'react'

export const Botones = ({iconText,
  text}) => {
  return (
    <>
    <a href="">
    <span className="material-symbols-outlined">
{iconText}
</span>
    <button>{text}</button>

    </a>
    </>
  )
}
