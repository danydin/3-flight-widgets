const tableBody = document.getElementById("table-body")

let flights = [
    {
        time: "06:11",
        destination: "TEL-AVIV",
        flight: "LY 23",
        gate: "C 02",
        notes: "ON TIME"
    },
    {
        time: "07:00",
        destination: "MANILA",
        flight: "LY 81",
        gate: "C 02",
        notes: "DELAYED 12:00"
    },
    {
        time: "08:15",
        destination: "TEL-AVIV",
        flight: "LY 29",
        gate: "B 11",
        notes: "ON TIME"
    },
    {
        time: "09:11",
        destination: "TEL-AVIV",
        flight: "LY 23",
        gate: "C 02",
        notes: "CANCELLED"
    }
]

const destinations = ['TEL-AVIV', 'EILAT', 'MANILA','DUBAI','NEW-YORK']
const notes = ['ON TIME', 'CANCELED','DELAYED']
let hour = 21

function populateTable() {

    // loop the arry
    for (const flight of flights){
        const tableRow = document.createElement("tr");
        
        // loop the objects 
        for (const flightDetail in flight){
            const tableCell = document.createElement('td')
            const letters = Array.from(flight[flightDetail])

            for (const [index, letter] of letters.entries()){
                setTimeout(() => {
                const divLetter = document.createElement('div')
                divLetter.classList.add("flip")
                divLetter.textContent = letter
                tableCell.appendChild(divLetter)
                }, 100 * index)
            }

            tableRow.appendChild(tableCell)
        }

        tableBody.appendChild(tableRow)
    }

}
populateTable()

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber) {
    const numbers = "0123456789"
    if (maxNumber){
        const newMax = numbers.slice(0, maxNumber + 1)
        return newMax.charAt(Math.floor(Math.random() * newMax.length))
    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
    if (hour < 10) {
        hour++
        hour = '0' + hour
    }
    else if (hour < 23){
        hour++
    }
    else if (hour >= 23){
        hour = '00'
    }
    return `${hour}:${generateRandomNumber(5)}${generateRandomNumber()}`
}

function loadNewFlights() {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: `${generateRandomLetter()} ${generateRandomNumber()}${generateRandomNumber()}`,
        note: notes[Math.floor(Math.random() * notes.length)]
    })
    tableBody.innerText = ''
    populateTable()
}

setInterval(loadNewFlights, 2000)


