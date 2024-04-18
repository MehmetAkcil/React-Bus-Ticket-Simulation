import './style.scss';
import {useState} from "react";


const Seat = ({i, selectedSeat, handleSeat, number, active, setActive}) => {


    const selectGender = (gender) => {
        handleSeat(gender, i)
        setActive(!active)
    }

    return (
        <button onClick={() => setActive(number)} className={`seat ${(i === 5) ? "space" : ""}`}
                key={i}>
            {selectedSeat.find(seat => seat.index === i) ? (
                <img
                    src={`/images/${selectedSeat.find(seat => seat.index === i).gender === 1 ? 'male-seat.png' : 'female-seat.png'}`}
                    alt=""/>
            ) : (
                <>
                    <img src="/images/empty-seat.png" alt=""/>
                    <div className={`gender-select ${active === number ? "active" : "hidden"}`}>
                        <div className="triangle" />
                        <button className="male" onClick={() => selectGender(1)}>
                            Erkek
                        </button>
                        <button className="female" onClick={() => selectGender(2)}>
                            Kadin
                        </button>
                    </div>
                </>
            )}
            <span className="count">
                {number}
            </span>
        </button>
    )
}

export default Seat;