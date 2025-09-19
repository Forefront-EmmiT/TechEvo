interface Rule {
    condition: (n: number) => boolean;
    output: string;
}

export const fizzBuzzRule: Rule = {
    condition: n => n % 3 === 0 && n % 5 === 0,
    output: "FizzBuzz"
}

export const fizzRule: Rule = {
    condition: n => n % 3 === 0,
    output: "Fizz"
}

export const buzzRule: Rule = {
    condition: n => n % 5 === 0,
    output: "Buzz"
}