import { Id, Password } from "../../shared";
import Event from "../models/Event";
import validateEvent from "./validate-event";

export default function complementaryEvent(
    partialEvent: Partial<Event>
  ): Event {
    const erros = validateEvent(partialEvent);
  
    if (erros.length) {
      throw new Error(erros.join("\n"));
    }
  
    const evento: Event = {
      ...partialEvent,
      eventId: partialEvent.eventId ?? Id.newId(),
      password: partialEvent.password ?? Password.create(20),
      expectedAudience: +(partialEvent.expectedAudience ?? 1),
    } as Event;
  
    return evento;
  }
  