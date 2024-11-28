import Guest from "../models/Guest";

export default function validateGuest(guest: Partial<Guest>): string[] {
  const errors: string[] = [];

  if (!guest.name) {
    errors.push("Nome é obrigatório");
  }

  if (!guest.email) {
    errors.push("E-mail é obrigatório");
  }

  return errors;
}