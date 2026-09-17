function enrollStudent(name: string, batch?: string): string {

return batch ? `${name} enrolled in ${batch}` : `${name} enrolled, batch not
assigned yet`;
}
console.log(enrollStudent('Sravya')); // batch not assigned yet
console.log(enrollStudent('Sravya', 'Morning')); // batch is Morning