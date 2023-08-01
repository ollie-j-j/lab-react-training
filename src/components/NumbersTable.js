function NumbersTable({ limit }) {
    let numbers = [];
    for (let i = 1; i <= limit; i++) {
        numbers.push(i);
    }

    return (
        <div className="numbers-grid">
            {numbers.map(number => (
                <div
                    key={number}
                    className="number"
                    style={{ backgroundColor: number % 2 === 0 ? 'red' : 'transparent' }}
                >
                    {number}
                </div>
            ))}
        </div>
    );
};

export default NumbersTable;