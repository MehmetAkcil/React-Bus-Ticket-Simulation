import Seat from "../Seat";

const Section2 = (
    {
        userId,
        seat2,
        selectedSeat2,
        setSelectedSeat2,
        selectedSeat1,
        active,
        setActive
    }
) => {
    const handleSeat2 = (gender, index) => {
        if (selectedSeat2.find(seat => seat.index === index)) {
            return alert("Bu zaten alinmis")
        }

        if (selectedSeat1.find(seat => (seat.index === index && seat.gender !== gender && seat.userId !== userId))) {
            return alert("Farkli cinsiyette birisi ile yan yana oturamazsiniz")
        }

        setSelectedSeat2([...selectedSeat2, {
            gender, index, userId
        }])

    }

    return (
        <div className="section-2">
            {
                Array.from({length: seat2}, (_, i) => (
                    <Seat active={active} setActive={setActive} handleSeat={handleSeat2} selectedSeat={selectedSeat2} i={i} number={i === 0 ? 2 : (i * 3)+2} key={i}/>
                ))
            }
        </div>
    )
}

export default Section2;