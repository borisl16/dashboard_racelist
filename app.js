const dataEvent = require('./data_event.json');

if (process.argv[2] === undefined) {
    let organiserId = Array.from(new Set(dataEvent.map(({
        organiserId
    }) => organiserId)));

    console.log(`Please select your Organiser ID/s form the list: \n ${organiserId}`)
} else {
    const organiserId = process.argv[2].split(',');

    organiserId.forEach(id => {

        const dataEventId = dataEvent.filter((e) => {
            return e.organiserId === parseInt(id)
        })

        const total = dataEventId.reduce((currentTotal, e) => {
        return e.ticketPrice["value"] + currentTotal
        }, + 0)

        let eventsDetails = "";
        for(let event of dataEventId) {
            eventsDetails += `${event.eventTitle} [ £${event.ticketPrice.value} ] \n`
        }

        console.log("[Organiser Id]: " + id + '\n')
        console.log("[Events and Prices]: " + '\n' + eventsDetails)
        console.log("[Total]: £" + total + '\n' + '\n')
        console.log("_____________________________________")

    });
}
