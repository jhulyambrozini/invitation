import Guest from "../models/Guest";
import validateGuest from "./validate-guest";

export default function complementaryGuest(guest: Partial<Guest>): Guest{
    const erros = validateGuest(guest);

    if (erros.length > 0) {
      throw new Error(erros.join("\n"));
    }
  
    const numberOfCompanions = guest.numberOfCompanions ?? 0;
    const hasCompanion =
      guest.hasCompanion &&
      guest.isConfirmed &&
      numberOfCompanions > 0;
  
    const guestUpdate = {
      ...guest,
      numberOfCompanion: hasCompanion ? numberOfCompanions : 0,
      hasCompanion: hasCompanion,
    };
  
    return guestUpdate as Guest;
}