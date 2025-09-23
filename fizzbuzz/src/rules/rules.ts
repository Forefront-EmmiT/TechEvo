interface Rule {
    condition: (n: bigint) => boolean;
    output: string;
    divisor: bigint;
}

export const ruleList: Rule[] = [
    {condition: n => n % 3n === 0n, output: "Fizz", divisor: 3n},
    {condition: n => n % 5n === 0n, output: "Buzz", divisor: 5n},
] 