import React, { useState } from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);
  const [p, setp] = useState(false)
  if (p) {
    return (null)
  }
  return (
    <div className="absolute left-full ml-3">
      <button onClick={() => {
        setp(true)
      }}>x</button>
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}

      />

    </div>
  )
}

export default ColorPicker