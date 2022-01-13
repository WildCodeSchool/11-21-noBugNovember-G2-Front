import React from 'react'
import '../components/styles/TextScroll.css'

export default function TexteDefile({title}) {
    return (
        <div className="messagedefilant">
          <div data-text={title}>
            <span>{title}</span>
          </div>
        </div>
    )
}
