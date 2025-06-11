function isBalanced(s) {
    // Stack to keep track of opening brackets
    const stack = [];

    // Map to match closing brackets with their corresponding opening brackets
    const bracketMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    // Iterate through each character in the string
    for (let char of s) {
        // If it's an opening bracket, push it to the stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else 
    }


}