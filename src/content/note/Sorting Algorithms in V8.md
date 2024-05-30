---
title: 'Sorting Algorithms in V8'
description: 'The sorting algorithm used in the V8 engine'
pubDate: 'Apr 28 2024'
---

#### Why Sorting in Dynamic Languages is Challenging

In dynamic languages like JavaScript, comparison operations can be quite heavy. This is primarily because the comparison function can be arbitrarily defined by the user, leading to inconsistent behavior.

```js
const array = [4, 2, 5, 3, 1]

function compare(a, b) {
  // Arbitrary code goes here, e.g. `array.push(1);`.
  return a - b
}

// A “typical” sort call.
array.sort(compare)
```

#### In the V8 Engine

When sorting elements, V8 goes through a three-step process, including pre-processing and post-processing steps.

1. Before actual sorting, it gathers all non-undefined elements into a temporary list and sorts them. The comparison function is used only in this step.
2. It handles undefined elements separately. Since all elements are undefined, no actual sorting is needed—only the length is calculated.
3. Once sorting is complete, the values are written back to the original array or object.

#### Sorting Algorithms: Past and Present

Array.prototype.sort used to rely on Quick Sort, but now it uses Tim Sort.

- Quick Sort's performance heavily depends on pivot selection, due to the principle of locality of reference.

Tim Sort is a modified version of Merge Sort and is generally more efficient.

- While Merge Sort operates recursively, Tim Sort works iteratively (minrun ~ merge ~ galloping ...).
- The transition from Quick Sort to Tim Sort involves using a temporary array for merging. This temporary array is quickly allocated and deallocated in V8's new space, making it short-lived.

#### More on Comparison Sorting Algorithms

There are many sorting algorithms. Based on average time complexity, Bubble Sort and Insertion Sort are `O(n^2)`, while Heap Sort, Merge Sort, and Quick Sort are `O(n log n)`.

Time complexity is influenced by the principle of locality of reference. Even with the same `O(n log n)` complexity, performance can vary due to the constant factor C in `C * n log n + α`.

- Heap Sort has poor locality of reference. The range of indices it compares is broad, making it hard to predict for cache memory.
- Merge Sort has good locality of reference since it compares and merges adjacent sections, but it requires additional memory proportional to the input array size.
- Quick Sort generally has good locality of reference around the pivot. However, in the worst case, it can degrade to `O(n^2)`.

#### References

<a href="https://v8.dev/blog/array-sort#timsort" target="_blank">Getting things sorted in V8</a><br>
<a href="https://www.linkedin.com/pulse/javascript-v8-sorting-algorithm-behind-scene-arraysort-mazahar-shaikh/" target="_blank">JavaScript V8 : Sorting Algorithm behind the scene for Array.sort()</a><br>
<a href="https://d2.naver.com/helloworld/0315536" target="_blank">Tim sort에 대해 알아보자</a><br>
