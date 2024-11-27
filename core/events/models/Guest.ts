export default interface Guest {
    guestId: string
    name: string
    email: string
    isConfirmed: boolean
    hasCompanion: boolean
    numberOfCompanions: number
}