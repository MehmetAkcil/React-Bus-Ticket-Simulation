import Seat from "../Seat";

const Section3 = (
    {seat3, selectedSeat3, setSelectedSeat3, userId, active, setActive}
) => {

    const handleSeat3 = (gender, index) => {
        if (selectedSeat3.find(seat => seat.index === index)) {
            alert("Bu zaten alinmis")
        } else {
            setSelectedSeat3([...selectedSeat3, {
                gender, index, userId
            }])
        }
    }

    return (
        <div className="section-3">
            {Array.from({length: seat3}, (_, i) => (
                <Seat
                    active={active}
                    setActive={setActive}
                    handleSeat={handleSeat3}
                    selectedSeat={selectedSeat3}
                    i={i}
                    number={i === 0 ? 3 : (i * 3) + ((i * 3) + 3 > 36 ? 1 : 3)}
                    key={i}
                />
            ))}
        </div>

    )
}

export default Section3;