function numberOfSubstrings(s: string): number {
    
    let i: number = 0;
    let j: number = 0;
    let wordCount: number = 0;
    let countA: number = 0;
    let countB: number = 0;
    let countC: number = 0;
    let len: number = s.length;
    
    while (i<=j && j<len) {
        const ch = s[j];

        if (ch == 'a') countA++;
        if (ch == 'b') countB++;
        if (ch == 'c') countC++;

        while (countA >= 1 && countB >= 1 && countC >= 1) {
            wordCount += 1 + (len - (j+1));

            if (s.charAt(i) == 'a') countA--;
            if (s.charAt(i) == 'b') countB--;
            if (s.charAt(i) == 'c') countC--;

            i++;
        }
        j++;
    }

    return wordCount;
};