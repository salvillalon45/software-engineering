interface DynamicArrayInterface {
	capacity: number;
	array: Array<number | undefined>;
	size: number;
}

/**
 * Dynamic Array Class
 * Note: JavaScript arrays are dynamic by default,
 * but this class is used to simulate the behavior of a dynamic array.
 */
class DynamicArray implements DynamicArrayInterface {
	capacity: number;
	array: Array<number | undefined>;
	size: number;

	/**
	 * @constructor
	 * @param {number} capacity - Initial capacity of the array.
	 */
	constructor(capacity: number) {
		this.capacity = capacity;
		this.array = new Array(capacity);
		this.size = 0;
	}

	/**
	 * Get the value at the i-th index.
	 * @param {number} i - The index to get the value from.
	 * @returns {number} - The value at the i-th index.
	 */
	get(i: number) {
		return this.array[i];
	}

	/**
	 * Set a value at the i-th index.
	 * @param {number} i - The index to insert the value at.
	 * @param {number} n - The value to insert.
	 * @returns {void}
	 */
	set(i: number, n: number) {
		this.array[i] = n;
	}

	/**
	 * Insert a value in the last position of the array.
	 * @param {number} n - The value to insert.
	 * @returns {void}
	 * when you add an element using the pushBack method, you place the new
	 * element at the position indicated by the current size of the array.
	 * After adding an element, you increment the size to reflect
	 * the new total number of elements in the array.
	 * We use the size to tell us how many elements are in the array
	 * And we use the size to place the element at the end of the array!
	 * Once we do it, then we increment size!
	 */
	pushback(n: number) {
		if (this.size === this.capacity) {
			// there are more elements than available for capacity!
			// so we must resize
			this.resize();
		}

		this.array[this.size] = n;
		this.size++;
	}

	/**
	 * Remove the last element in the array.
	 * @returns {number}
	 */
	popback() {
		const lastIndex = this.size - 1;
		const lastElement = this.array[lastIndex];

		// Optinal if you want to include a marker saying that the element has
		// been removed
		// this.array[lastIndex] = undefined;

		this.size--;

		return lastElement;
	}

	/**
	 * Resize the array to double its current capacity.
	 * @returns {void}
	 */
	resize() {
		this.capacity = this.capacity * 2;

		const lastIndex = this.capacity - 1;
		const newArray = new Array(this.capacity);

		this.array.forEach((element, index) => {
			newArray[index] = element;
		});

		this.array = newArray;
	}

	/**
	 * Get the current size of the array.
	 * @returns {number} - The current size.
	 */
	getSize() {
		return this.size;
	}

	/**
	 * Get the current capacity of the array.
	 * @returns {number} - The current capacity.
	 */
	getCapacity() {
		return this.capacity;
	}
}

export default DynamicArray;