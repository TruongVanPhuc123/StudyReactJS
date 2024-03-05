import React from 'react'

export const Imgshow = ({ path, indexp, zIndex }) => {
    return <img src={`./character/${path}/${indexp}.png `} style={{ width: "260px", top: "0", left: "0px", position: "absolute", zIndex: zIndex }} />
}
