import Guest from "./Guest"

export default interface Event  {
    eventId: string
    alias: string
    description: string
    password: string
    name: string
    date: Date
    local: string
    image: string
    backgroundImage: string
    expectedAudience: number
    guests: Guest[]
}