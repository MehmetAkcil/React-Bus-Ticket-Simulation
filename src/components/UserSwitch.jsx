const UserSwitch = (
    {
        userId,
        setUserId
    }
) => {

    return (
        <div className="buttons">
            <button className={`${userId === 1 ? "active" : ""}`} onClick={() => setUserId(1)}>
                Hesap 1
            </button>
            <button className={`${userId === 2 ? "active" : ""}`} onClick={() => setUserId(2)}>
                Hesap 2
            </button>
        </div>
    )
}

export default UserSwitch;