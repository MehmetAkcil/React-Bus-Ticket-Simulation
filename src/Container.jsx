import {useState} from "react";
import Section1 from "./components/sections/Section1.jsx";
import Section2 from "./components/sections/Section2.jsx";
import Section3 from "./components/sections/Section3.jsx";
import UserSwitch from "./components/UserSwitch.jsx";


const Container = () => {

    const [userId, setUserId] = useState(1)

    const [seat1, setSeat1] = useState(12)
    const [seat2, setSeat2] = useState(12)
    const [seat3, setSeat3] = useState(13)

    const [selectedSeat1, setSelectedSeat1] = useState([])
    const [selectedSeat2, setSelectedSeat2] = useState([])
    const [selectedSeat3, setSelectedSeat3] = useState([])

    const [active, setActive] = useState(false)

    return (
        <div className="full">
            <UserSwitch
                userId={userId}
                setUserId={setUserId}
            />
            <div className="sun">
                <img src="/images/sun.png" width={100} alt="sun"/>
            </div>
            <div className="bus">
                <img src="/images/empty-bus.png" alt="bus"/>
                <Section1
                    userId={userId}
                    seat1={seat1}
                    selectedSeat1={selectedSeat1}
                    setSelectedSeat1={setSelectedSeat1}
                    selectedSeat2={selectedSeat2}
                    active={active}
                    setActive={setActive}
                />
                <Section2
                    userId={userId}
                    seat2={seat2}
                    selectedSeat2={selectedSeat2}
                    setSelectedSeat2={setSelectedSeat2}
                    selectedSeat1={selectedSeat1}
                    active={active}
                    setActive={setActive}
                />
                <Section3
                    userId={userId}
                    seat3={seat3}
                    selectedSeat3={selectedSeat3}
                    setSelectedSeat3={setSelectedSeat3}
                    active={active}
                    setActive={setActive}
                />

            </div>
        </div>
    )
}

export default Container;