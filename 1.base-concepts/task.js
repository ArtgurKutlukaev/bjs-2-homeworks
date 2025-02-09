"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    let d = b ** 2 - 4 * a * c;
    if (d > 0) {
        arr[0] = (-b + Math.sqrt(d)) / (2 * a);
        arr[1] = (-b - Math.sqrt(d)) / (2 * a);
    } else if (d === 0) {
        arr[0] = -b / (2 * a);
    } else {
        arr = [];
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let per = parseInt(percent) / 100 / 12; //���������� ������
    let con = parseInt(contribution); //��������� ����� 
    let am = parseInt(amount); //����� ���������
    let cm = parseInt(countMonths); // ���� �������

    if (isNaN(per) || per < 0) {
        return `�������� "���������� ������" �������� ������������ �������� "${percent}"`;
    } else if (isNaN(con) || con < 0) {
        return `�������� "��������� �����" �������� ������������ �������� "${contribution}"`;
    } else if (isNaN(am) || am < 0) {
        return `�������� "����� ���������" �������� ������������ �������� "${amount}"`;
    } else {
        if (isNaN(cm) || cm < 0) {
            return `�������� "���� �������" �������� ������������ �������� ${countMonths}`;
        }
        let s = am - con; //���� �������
        let pay = s * (per + per / (((1 + per) ** cm) - 1)); //����������� ������
        let totalAmount = (pay * cm).toFixed(2);
        console.log(totalAmount);
        return +totalAmount;
    }
}