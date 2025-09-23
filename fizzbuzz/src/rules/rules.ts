interface Rule {
    output: string;
    divisor: bigint;
}

export const ruleList: Rule[] = [
    {divisor: 3n, output: "Fizz"},
    {divisor: 5n, output: "Buzz"},
] 