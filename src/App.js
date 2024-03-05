import { useState, useEffect } from 'react';
import "./App.css"
import { PartList } from './components/PartList';
import Avatar from './components/Avatar';

const total = {
    body: 17,
    eyes: 17,
    hair: 17,
    mouths: 24,
    eyesbrows: 15,
    glasses: 17,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
};


function App() {

    const [body, setBody] = useState(0)
    const [eyes, setEyes] = useState(0)
    const [hair, setHair] = useState(0)
    const [mouths, setMouths] = useState(0)
    const [eyesbrows, setEyesbrows] = useState(0)
    const [glasses, setGlasses] = useState(0)
    const [clothing1, setClothing1] = useState(0)
    const [clothing2, setClothing2] = useState(0)
    const [clothing3, setClothing3] = useState(0)


    const randomize = () => {
        setBody(Math.floor(Math.random() * total.body))
        setEyes(Math.floor(Math.random() * total.eyes))
        setHair(Math.floor(Math.random() * total.hair))
        setMouths(Math.floor(Math.random() * total.mouths))
        setEyesbrows(Math.floor(Math.random() * total.eyesbrows))
        setGlasses(Math.floor(Math.random() * total.glasses))
        setClothing1(Math.floor(Math.random() * total.clothing1))
        setClothing2(Math.floor(Math.random() * total.clothing2))
        setClothing3(Math.floor(Math.random() * total.clothing3))
    }

    useEffect(() => {
        randomize();
    }, [])

    return (
        <div className='App'>
            <div className="title">CHARACTER</div>
            <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
            <div className="divider"></div>
            <div className="avatar-groups" style={{ gap: "30px" }}>
                <div>
                    <div className="avatar-wrapper">
                        <Avatar body={body} eyes={eyes} hair={hair} mouths={mouths} eyesbrows={eyesbrows} glasses={glasses} clothing1={clothing1} clothing2={clothing2} clothing3={clothing3} />
                        <div className="text-center">
                            <button className="button" onClick={() => randomize()}>Randomize!</button>
                        </div>
                    </div>
                </div>
                <div className="all-list">

                    <div className="list-section">
                        <h2>Body</h2>
                        <PartList total={total.body} path="body" setClick={setBody} check={body} />
                    </div>
                    <div className="list-section">
                        <h2>Eyes</h2>
                        <PartList total={total.eyes} path="eyes" setClick={setEyes} check={eyes} top="35px" />
                    </div>
                    <div className="list-section">
                        <h2>Hair</h2>
                        <PartList total={total.hair} path="hair" setClick={setHair} check={hair} />
                    </div>
                    <div className="list-section">
                        <h2>Mouths</h2>
                        <PartList total={total.mouths} path="mouths" setClick={setMouths} check={mouths} />
                    </div>
                    <div className="list-section">
                        <h2>Eyes Brows</h2>
                        <PartList total={total.eyesbrows} path="eyebrows" setClick={setEyesbrows} check={eyesbrows} />
                    </div>
                    <div className="list-section">
                        <h2>Glasses</h2>
                        <PartList total={total.glasses} path="accessories/glasses" setClick={setGlasses} check={glasses} />
                    </div>
                    <div className="list-section">
                        <h2>Clothing (L1)</h2>
                        <PartList total={total.clothing1} path="clothes/layer_1" setClick={setClothing1} check={clothing1} />
                    </div>
                    <div className="list-section">
                        <h2>Clothing (L2)</h2>
                        <PartList total={total.clothing2} path="clothes/layer_2" setClick={setClothing2} check={clothing2} />
                    </div>
                    <div className="list-section">
                        <h2>Clothing (L3)</h2>
                        <PartList total={total.clothing3} path="clothes/layer_3" setClick={setClothing3} check={clothing3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App