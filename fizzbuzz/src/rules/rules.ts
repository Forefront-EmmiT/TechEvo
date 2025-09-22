interface Rule {
    condition: (n: number) => boolean;
    output: string;
}

export const ruleList: Rule[] = [
    {condition: n => n % 3 === 0, output: "Fizz"},
    {condition: n => n % 3 === 0, output: "Fizz"},
    {condition: n => n % 5 === 0, output: "Buzz"},
] 