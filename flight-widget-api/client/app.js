const tableBody = document.getElementById('table-body');

const getFlights = () => {
    fetch('http://localhost:3000/flights')
    .then(response=>response.json())
    .then(flights => {
        populateTable(flights)
    })
    .catch(err => console.error(err))
}

getFlights();

const populateTable = (flightsFromFetch) => {
    // console.log(flightsFromFetch);
    for (const flight of flightsFromFetch) {
        console.log(flight)
        const tableRow = document.createElement('tr')
        const tableIcon = document.createElement('td')
        tableIcon.textContent = '✈️'
        tableRow.appendChild(tableIcon)
        
        const flightDetails = {
            date: flight.date.slice(0,10),
            origin: `${flight.departure_ident}`,
            destination: `${flight.arrival_ident}`,
            flight: flight.flnr,
            status: flight.status
        }

        for (const flightDetial in flightDetails) {
            const tableCell = document.createElement('td')

            console.log(flightDetails[flightDetial])

            // get the value of each prop and convert to array
            const letters = Array.from(flightDetails[flightDetial])
            for (const [index, letter] of letters.entries()){
                const letterElement = document.createElement('div')
                setTimeout(()=>{
                    letterElement.textContent = letter
                    letterElement.classList.add('flip')
                    tableCell.appendChild(letterElement)
                },100 * index)
            }
            tableRow.appendChild(tableCell)
        }
        tableBody.appendChild(tableRow)
    }
}