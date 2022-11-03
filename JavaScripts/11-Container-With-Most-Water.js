const  maxArea = function (height) {
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let maxAreaCalculated = findArea(leftPointer, rightPointer, height)
    while (leftPointer < rightPointer) {
        if (height[leftPointer] < height[rightPointer]) {
            leftPointer++
        } else {
            rightPointer--
        }

        const currentArea = findArea(leftPointer, rightPointer, height)
        maxAreaCalculated = Math.max(currentArea, maxAreaCalculated)
    }
    return maxAreaCalculated
};

const findArea = function (leftPointer, rightPointer, height) {

    const width = rightPointer - leftPointer
    const length = Math.min(height[leftPointer], height[rightPointer])
    const area = width * length;
    return area
}

// Độ phức tạp thời gian O (n)
// Độ phức tạp không gian O (1)

// 1. Tạo con trỏ trái và gán nó cho 0.
// 2. Tạo con trỏ bên phải và gán nó cho height.length -1.
// 3. Tạo biến maxAreaCalculated và gán nó vào vùng hiện tại với các con trỏ bắt đầu
// 4. Trong khi con trỏ trái nhỏ hơn con trỏ phải
// một. Nếu giá trị chỉ mục ở con trỏ bên trái nhỏ hơn giá trị chỉ mục ở con trỏ bên phải, hãy tăng con trỏ bên trái
// b. Giảm khác con trỏ bên phải.
// c. Tính diện tích và sau đó lấy giá trị lớn nhất của diện tích hiện tại và maxAreaCalculated
// 5. Trả về maxAreaCalculated