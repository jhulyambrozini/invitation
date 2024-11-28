import { Id } from "../../shared";
import Guest from "../models/Guest";

export default function createEmptyGuest(): Partial<Guest> {
    return {
        guestId: Id.newId(),
        name: '',
        email: '',
        isConfirmed: true,
        hasCompanion: false,
        numberOfCompanions: 0,
    }
}