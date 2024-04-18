import Seat from "../Seat";

const Section1 = ({
                      userId,
                      seat1,
                      selectedSeat1,
                      setSelectedSeat1,
                      selectedSeat2,
                      active,
                      setActive
                  }) => {

    const handleSeat1 = (gender, index) => {
        if (selectedSeat1.find(seat => seat.index === index)) {
            return alert("Bu zaten alinmis")
        }

        if (selectedSeat2.find(seat => (seat.index === index && seat.gender !== gender && seat.userId !== userId))) {
            return alert("Farkli cinsiyette birisi ile yan yana oturamazsiniz")
        }

        setSelectedSeat1([...selectedSeat1, {
            gender, index, userId
        }])

    }


    return (

        <div className="section-1">
            {
                Array.from({length: seat1}, (_, i) => (
                    <Seat active={active} setActive={setActive} handleSeat={handleSeat1} selectedSeat={selectedSeat1} i={i} number={i === 0 ? 1 : (i * 3) + 1}
                          key={i}/>
                ))
            }
        </div>

    )
}

export default Section1;