import React, { useState } from 'react'

export default function Model() {
    const [toggle, setToggle] = useState(true);

    function toggleHandler() {
        setToggle(!toggle)
        console.log(toggle) //true false
    }

    return (
        <div>
            <button onClick={toggleHandler}>Click</button>
            {
                toggle &&
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor earum a est quasi accusantium repellendus, distinctio enim, consectetur ipsum non esse harum consequuntur voluptas! Quam veniam officiis beatae provident nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vel incidunt, aspernatur nobis magnam, doloribus dolorum dolore blanditiis, quo minima esse sapiente iure aperiam enim eius itaque cumque veritatis suscipit!
                </p>
            }

        </div>
    )
}
