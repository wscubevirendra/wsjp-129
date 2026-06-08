import Btn from "./Btn";

export default function Card({ title, isBtn }) {

    return (
        <div className="card">
            <h2>{title}</h2>

            <p>
                Unlock all premium features, create unlimited projects,
                enjoy faster performance, and get priority customer support
                whenever you need assistance.
            </p>
            <Btn isBtn={isBtn} />



        </div>
    )
}
