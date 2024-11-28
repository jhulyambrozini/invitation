import { Id } from "../../shared"
import Event from "../models/Event"

export default function createEmptyEvent(): Partial<Event>{
    return {
        eventId: Id.newId(),
        name: '',
        description: '',
        expectedAudience: 1,
        image: '',
        backgroundImage: ''
    }
}