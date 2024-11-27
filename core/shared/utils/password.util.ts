export default class Password {
    static create(length: number = 15): string {
        const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upercaseLetters = lowercaseLetters.toUpperCase();
    const numbers = "0123456789";
    const specials = "!@#$%&*";

    const groups = [lowercaseLetters, upercaseLetters, numbers, specials];
    const pasword = [];

    for (let i = 0; i < length; i++) {
      const grupo = groups[Math.floor(Math.random() * groups.length)];
      pasword.push(grupo[Math.floor(Math.random() * grupo.length)]);
    }

    return pasword.join("");
    }
}