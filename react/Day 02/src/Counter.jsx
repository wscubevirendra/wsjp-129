import { useState } from "react"


function Counter() {
    const [count, setCount] = useState(0);

    function incHandler() {
        setCount(count + 1)
        console.log(count)
    }

    function decHandler() {
        setCount(count - 1)
    }

    console.log("Hello")


    return (
        <div className="card">
            <button onClick={incHandler}>+</button>
            <h2>{count}</h2>
            <button onClick={decHandler}>-</button>
        </div>
    )
}

export default Counter