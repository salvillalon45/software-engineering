class Stack<T> {
	private stack: Array<T>;
	private index: number;

	/**
	 * Constructor for creating a new instance of the Stack class.
	 *
	 */
	constructor() {
		this.stack = new Array();
		this.index = 0;
	}

	/**
	 * Adds an element to the stack and increments the index and size.
	 *
	 * @param {T} element - the element to be added to the stack
	 * @return {void}
	 */
	push(element: T): void {
		this.stack[this.index] = element;
		this.index++;
	}

	/**
	 * Removes and returns the top element of the stack.
	 *
	 * @return {T | undefined} The top element of the stack, or undefined if the stack is empty
	 */
	pop(): T | undefined {
		const topIndex = this.index - 1;
		const topElement = this.stack[topIndex];

		this.stack.splice(topIndex);
		this.index--;

		return topElement;
	}

	/**
	 * Clears the stack and resets the size and index.
	 *
	 * @return {void}
	 */
	clear(): void {
		this.stack = [];
		this.index = 0;
	}

	/**
	 * Return the element at the top of the stack without removing it.
	 *
	 * @return {T | undefined} The element at the top of the stack,
	 * or undefined if the stack is empty.
	 */
	peek(): T | undefined {
		const topIndex = this.index - 1;

		return this.stack[topIndex];
	}

	/**
	 * Check if the stack is empty.
	 *
	 * @return {boolean} true if the stack is empty, false otherwise
	 */
	isEmpty(): boolean {
		return this.stack.length === 0;
	}
}

export default Stack;