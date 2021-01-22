const numbers = [1, 2, 92, 5, -1, 53, 32];

console.log(numbers.reverse());

console.log(numbers.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}));

let courses = [
    {id: 1, course:"Node.js"},
    {id:2, course:"JavaScript"}
];

console.log(courses.sort((a, b) => {
    if (a.course < b.course) return -1;
    if (a.course > b.course) return 1;
    return 0;
}));
