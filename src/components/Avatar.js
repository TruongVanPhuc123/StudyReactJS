import React from 'react'
import { Imgshow } from './Img'

function Avatar({ body, eyes, hair, mouths, eyesbrows, glasses, clothing1, clothing2, clothing3 }) {
    return (
        <div className="avatar">
            <Imgshow path='body' indexp={body} zIndex={0} />
            <Imgshow path='eyes' indexp={eyes} zIndex={1} />
            <Imgshow path='hair' indexp={hair} zIndex={2} />
            <Imgshow path='mouths' indexp={mouths} zIndex={3} />
            <Imgshow path='eyebrows' indexp={eyesbrows} zIndex={4} />
            <Imgshow path='accessories/glasses' indexp={glasses} zIndex={5} />
            <Imgshow path='clothes/layer_1' indexp={clothing1} zIndex={6} />
            <Imgshow path='clothes/layer_2' indexp={clothing2} zIndex={7} />
            <Imgshow path='clothes/layer_3' indexp={clothing3} zIndex={8} />
        </div>
    )
}

export default Avatar