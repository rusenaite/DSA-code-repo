class Stack:
    def __init__(self):
        self.stack = []

    # Push operation: Add element to the top
    def push(self, item):
        self.stack.append(item)

    # Pop operation: Remove and return the top element
    def pop(self):
        if not self.isEmpty():
            return self.stack.pop()
        else:
            return "Stack is empty!"

    # Peek operation: View the top element without removing it
    def peek(self):
        if not self.isEmpty():
            return self.stack[-1]
        else:
            return "Stack is empty!"

    # isEmpty operation: Check if stack is empty
    def isEmpty(self):
        return len(self.stack) == 0

    # Size operation: Return the number of elements in the stack
    def size(self):
        return len(self.stack)

# Example usage
my_stack = Stack()

# Push elements
my_stack.push(10)
my_stack.push(20)
my_stack.push(30)

print("Top element (peek):", my_stack.peek())   # Output: 30
print("Popped element:", my_stack.pop())        # Output: 30
print("Stack size:", my_stack.size())           # Output: 2
print("Is stack empty?", my_stack.isEmpty())    # Output: False
