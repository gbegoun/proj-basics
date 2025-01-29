export function AnimalTable({data}) {
    return (
        <section className="animal-table-container">
            <h2>Rare Animals</h2>
            <table className="animal-table">
                <tbody>
                    {data.map((animal,idx)=> (
                        <tr key={idx}>
                            <td>{animal.type}</td>
                            <td>{animal.count}</td>
                            <td><a href={`https://www.google.com/search?q=${animal.type}`} target="_blank">Search</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}
