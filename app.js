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
        } else {
            // If it's a closing bracket:
            // Check if stack is empty or top of stack doesn't match the opening bracket
            if (stack.length === 0 || stack[stack.length - 1] !== bracketMap[char]) {
                return "NO";
            }
            // If it's a match, pop the opening bracket from the stack
            stack.pop();
        }
    }

    // If stack is empty, all brackets matched properly
    return stack.length === 0 ? "YES" : "NO";
}


// My final solution