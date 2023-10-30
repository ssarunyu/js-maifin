const e = require("express");

class ConcertTicketManagement {
    static autoId = 1
    constructor() {
        this.concertTickets = []
    }

    // Create new concert
    createNewConcert(artist) {
        const newConcert = {id: ConcertTicketManagement.autoId++, artist: artist, prices: []}
        return this.concertTickets.push(newConcert)
    }

    // Add only single price to concert
    addSinglePricesToTicket(id, prices) {
        const index = this.findConcertIndex(id)
        // -1 use to check a specific item or element
        // exists in an array or not
        if (index !== -1) {
            this.concertTickets[index].prices.push(prices)
        }
    }
    
    // Add many price of concert
    addManyPricesToTicket(id, prices) {
        const index = this.findConcertIndex(id)
        // -1 use to check a specific item or element
        // exists in an array or not
        if (index !== -1) {
            this.concertTickets[index].prices.push(...prices)
        }
    }

    // Find the index in concertTickets array by id
    // ** Index is index in array start from 0 not mean id
    findConcertIndex(id) {
        return this.concertTickets.findIndex(ct => ct.id === id)
    }

    // Remove the concert by id
    removeConcert(id) {
        const index = this.findConcertIndex(id)
        // -1 use to check a specific item or element
        // exists in an array or not
        if (index !== -1) {
            // This line doesn't need to return
            // but i this case we return to see what we remove
            // even you not return this line function still work right
            return this.concertTickets.splice(index, 1)
        }
        // It's optional you can return whatever you want in this i return undefined
        else {
            return undefined
        }
    }

    // Show aveage price of that artist by using id
    findAverageTicketPriceById(id) {
        const concertIndex = this.findConcertIndex(id)
        // -1 use to check a specific item or element
        // exists in an array or not
        if (concertIndex !== -1) {
            // Defined for output
            const artistName = this.concertTickets[concertIndex].artist
            // Defined for calculator the value
            const pricesArr = this.concertTickets[concertIndex].prices
            // Use reduce to sum total price in prices array
            const sum = pricesArr.reduce((total, price) => total + price, 0)
            // sum / pricesArr.length is where we calculator the average price
            return `${artistName} : Average Ticket Price: ${sum / pricesArr.length}THB`
        }
        // It's optional you can return whatever you want in this i return undefined
        else {
            return undefined
        }
    }

    // Return concert that price less than amount parameter
    priceLessthan(amount) {
        return this.concertTickets.filter(ct => {
            // The reason you cannot use ct.prices < amount directly in the filter method
            // is because ct.prices is an array,
            // and you cannot directly compare an array to a single value
            // with the < operator
            // That reason why you can't code like this
            // -----------------------------------------
            // priceLessthan(amount) {
            // return this.concertTickets.filter(ct => ct.prices < amount)
            // }
            return ct.prices.some(price => price <= amount)
        })
    }

    // Sort Prices by id return whole object
    sortPrices(id) {
        const index = this.findConcertIndex(id)
        this.concertTickets[index].prices.sort((a, b) => a - b)
        return this.concertTickets[index]
    }

    // Find concert by using id
    // Use join format convert to string in output
    findConcertById(id) {
        const index = this.findConcertIndex(id)
        // -1 use to check a specific item or element
        // exists in an array or not
        if (index !== -1) {
            const concert = this.concertTickets[index]
            return `Artist: ${concert.artist}, Prices: ${concert.prices.join('THB, ')} THB`
        }
        // It's optional you can return whatever you want in this i return undefined
        else {
            return undefined
        }
    }

    // Find concert by using artist name case-insensitive
    findConcertByArtistName(artistName) {
        return this.concertTickets.find(ct => ct.artist.toLowerCase() === artistName.toLowerCase()) ?? `Can't find this artist!`
        // ?? call 'nullish coalescing operator' if value undefined or null
        // Result will show what after the ?? symbol
    }

    // Show all objects in concertTickets array
    getAllConcert() {
        return this.concertTickets;
    }
}


const cm = new ConcertTicketManagement();
cm.createNewConcert('Adele')
cm.createNewConcert('Bring me the horizon')
cm.createNewConcert('Jeremy Zucker')
cm.createNewConcert('Sabrina Carpenter')
console.log(` =========== Length of all available concert ===========`)
console.log(cm.createNewConcert('Ed Sheeran'))
console.log(``)
cm.addManyPricesToTicket(1, [2500, 3500, 4500, 7500, 10000])
cm.addManyPricesToTicket(2, [4300, 3300])
cm.addSinglePricesToTicket(3, 2700)
cm.addSinglePricesToTicket(4, 2900)
cm.addManyPricesToTicket(5, [3500, 6500, 1800, 4500, 5500, 2500, 7500, 12000])
console.log(` =========== Find Average Ticket Price By Id  ===========`)
console.log(cm.findAverageTicketPriceById(5))
console.log(`Find Average Ticket Price id 7:`, cm.findConcertById(7))
console.log(``)
console.log(`================== Sort prices by concert Id ==================`)
console.log(cm.sortPrices(5))
console.log(cm.sortPrices(2))
console.log(``)
console.log(`================== Search Concert By Id ==================`)
console.log(cm.findConcertById(5))
console.log(`Search id 7:`, cm.findConcertById(7))
console.log(``)
console.log(`============== Search Concert By Artist Name ==============`)
console.log(cm.findConcertByArtistName('sabrina carpenter'))
console.log(`Search concert by artist name who not have value in this array: (result will show what we defined after ?? symbol)`)
console.log(cm.findConcertByArtistName('hihihihi'))
console.log(``)
console.log(`============== Remove Concert By Id ==============`)
console.log('Just remove: ', cm.removeConcert(1))
console.log('Now all concert :', cm.getAllConcert())
console.log(``)
console.log(`================== Price less than ==================`)
console.log(cm.priceLessthan(2800))
console.log(``)
console.log(``)
console.log(`================== Get all concert after sort ==================`)
console.log(cm.getAllConcert())