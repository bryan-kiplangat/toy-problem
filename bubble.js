// Bubble Sort repeatedly steps through the list, 
// compares adjacent elements, and swaps them if they are in the wrong order.
// The pass through the list is repeated until no swaps are needed,
// which means the list is sorted
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap arr[i] and arr[i+1]
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

const sampleInput = [5, 6, 1, 3, 4, 2];
const sortedArray = bubbleSort(sampleInput);
console.log(sortedArray); // [1, 2, 3, 4, 5, 6]

// toDO: prompt users for array of any length
// toDo: how to stop input when done adding numbers to array

// Do while loop
// for loop
// arrays
// bubblesort sorting algorithm
