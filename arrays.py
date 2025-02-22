import numpy as np

# 1️⃣ Create a fixed-size array of 5 integers
number_array = np.zeros(5, dtype=int)
print("Array after initialization:", number_array)  # [0 0 0 0 0]


# 2️⃣ Accessing elements by index
print("Element at index 2:", number_array[2])  # 0
print("All elements:")
for i in range(len(number_array)):
    print(f"Index {i}: {number_array[i]}")  # Iteration like classic array


# 3️⃣ Modifying elements (in-place update)
number_array[2] = 10
print("Array after modifying index 2:", number_array)  # [0 0 10 0 0]


# 4️⃣ Attempt to access out-of-bounds (commented to avoid crash)
# print(number_array[5])  # Raises IndexError (classic array behavior)


# 5️⃣ Type safety (only integers allowed)
# number_array[1] = "string"  # Raises TypeError (commented to prevent crash)


# 6️⃣ Prevent resizing (no resizing without explicit action)
print("Array size:", number_array.shape[0])  # 5 (fixed size)
# NumPy prevents in-place resizing unless explicitly forced

# Appending returns a new array, not modifying the original
new_array = np.append(number_array, 20)
print("New array after append (violates strict array rule):", new_array)
print("Original array remains unchanged:", number_array)


# 7️⃣ Efficient traversal and operations
sum_of_elements = np.sum(number_array)  # Sum of array elements
print("Sum of array elements:", sum_of_elements)  # 10


# 8️⃣ Search and slicing
index_of_ten = np.where(number_array == 10)[0]
print("Index of value 10:", index_of_ten[0])  # 2

array_slice = number_array[1:4]
print("Array slice (1 to 3):", array_slice)  # [0 10 0]
