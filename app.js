fuction isValid(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let char of s) {
        if (char === '(' || char === '{') {
            stack.push(char)
        }
    }
}

// Now to finish I will start by 