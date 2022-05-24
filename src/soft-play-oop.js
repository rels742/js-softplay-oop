// TODO: Write your class in this file
class SoftPlay {
  constructor(adults = 0, children = 0) {
    this.adults = adults
    this.children = children
  }

  occupancy() {
    return {
      children: this.children,
      adults: this.adults
    }
  }

  enter(numAdults, numChildren) {
    if(numAdults >= numChildren) {
      this.adults += numAdults
      this.children += numChildren
      return true
    }
    return false
  }

  leave(numAdults, numChildren) {
    if(numAdults < numChildren ||
      numAdults > this.adults ||  
      numChildren > this.children ||
      this.children - numChildren > this.adults - numAdults) {
        return false
      }
    this.adults -= numAdults
    this.children -= numChildren
    return true
  }
} 


// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay
}
