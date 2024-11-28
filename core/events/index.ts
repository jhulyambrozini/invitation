import Event from "./models/Event";
import Guest from "./models/Guest";

import createEmptyEvent from "./functions/create-empty-event";
import createEmptyGuest from "./functions/create-empty-guest";
import complementaryEvent from "./functions/complementary-event";
import complementaryGuest from "./functions/complementary-guest";

export type {Event, Guest}

export {
    createEmptyEvent, createEmptyGuest, complementaryEvent, complementaryGuest
}