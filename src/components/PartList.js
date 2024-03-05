import React from 'react'

export const PartList = ({ total, path, setClick, check, top = "50%", height = "60px" }) => {
    let parts = [];
    for (let i = 0; i < total; i++) {
        parts.push(
            <div key={path + i} className={check === i ? `selected clickable square` : `clickable square`} onClick={() => setClick(i)}>
                <img src={`./character/${path}/${i}.png`} alt={""} className="img-center" style={{ height, top }} />
            </div>
        )
    }

    return <div className='list'>{parts}</div>
}
