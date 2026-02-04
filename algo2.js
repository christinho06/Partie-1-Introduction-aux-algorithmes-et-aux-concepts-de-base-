/**
 * Implementation of Insertion Sort in JavaScript
 */
function insertionSort(arr) {
    // Start from the second element (index 1)
    for (let i = 1; i < arr.length; i++) {
        // Select the element arr[i] (the key)
        let key = arr[i];
        
        // Start comparing with the element at position i-1
        let j = i - 1;

        /* Move elements of arr[0..i-1] that are greater than key
           to one position ahead of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shifting
            j = j - 1;           // Move to the next element on the left
        }

        // Insert the key into its correct spot
        arr[j + 1] = key;
    }
    return arr;
}

// --- Testing the code ---
let myData = [12, 11, 13, 5, 6];
console.log("Original Array:", myData);

insertionSort(myData);
console.log("Sorted Array:  ", myData);