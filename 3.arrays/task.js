//������ 1
function compareArrays(arr1, arr2) {
    return arr1.every((n, i) => n === arr2[i]) && arr1.length === arr2.length;
}
console.log(compareArrays([8, 9], [6])); // false, ������ ��������
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, ������ ��������
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, ������ ��������
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, ������ �������, ���� � ���������� ��������
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true)

//������ 2
const people = [
    { firstName: "���������", secondName: "������", age: 17, gender: "�������" },
    { firstName: "����", secondName: "�������", age: 21, gender: "�������" },
    { firstName: "�������", secondName: "�������", age: 40, gender: "�������" },
    { firstName: "�������", secondName: "���������", age: 37, gender: "�������" },
    { firstName: "�����", secondName: "�����������", age: 18, gender: "�������" },
    { firstName: "�������", secondName: "������", age: 17, gender: "�������" },
    { firstName: "Ը���", secondName: "��������", age: 50, gender: "�������" },
    { firstName: "�������", secondName: "������", age: 35, gender: "�������" },
    { firstName: "������", secondName: "�������", age: 49, gender: "�������" },
    { firstName: "�����", secondName: "���������", age: 25, gender: "�������" },
    { firstName: "������", secondName: "�����", age: 22, gender: "�������" },
    { firstName: "���������", secondName: "�������", age: 40, gender: "�������" },
    { firstName: "����", secondName: "�������", age: 35, gender: "�������" },
    { firstName: "�������", secondName: "�������", age: 19, gender: "�������" },
]

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, users) => {
        acc = acc + item;
        if (index === users.length - 1) {
            return acc / users.length;
        }
        return acc;
    }, 0);
    return result;
}

console.log(getUsersNamesInAgeRange(people, "�������")); // 32
console.log(getUsersNamesInAgeRange(people, "�������")); // 27.4
console.log(getUsersNamesInAgeRange([], "�������")); // 0
console.log(getUsersNamesInAgeRange(people, "�������������")); // 0