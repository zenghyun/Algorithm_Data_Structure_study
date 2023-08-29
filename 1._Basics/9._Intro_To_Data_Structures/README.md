## Data Structure

- Binary Search Trees
- Queues
- Singly Linked Lists
- Undirected Unweighted Graphs
- Binary Heaps
- Directed Graphs
- Hash Tables
- Doubly Linked Lists
- Stacks

## ES2015 CLASS SYNTAX

### Objectives
- Explain what a class is 
- JavaScript가 클래스 아이디어를 구현하는 방법을 이해합니다.
- 추상화, 캡슐화, 다형성과 같은 용어 정의
- ES2015 클래스를 사용하여 데이터 구조 구현

### What is a class? 
사전 정의된 속성과 메서드를 사용하여 객체를 생성하기 위한 청사진

## The Syntax 
```js
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    static enrollStudents(...students) {
        // maybe send an email here
    }
}

let firstStudent = new Student('Colt', 'Steele');
let secondStudent = new Student('Blue', 'Steele');

Student.enrollStudents([firstStudent, secondStudent]);

firstStudent.fullName();
```

- 새로운 객체를 생성하는 메소드는 생성자(Constructor)라고 불려야 합니다.
- class 키워드는 상수를 생성하므로 재정의할 수 없습니다. 구문도 주의하세요!

<br>

### Recap 
- 클래스는 생성 시 객체를 인스턴스라고 부르는 청사진입니다.
- 새로운 키워드로 클래스가 생성됩니다.
- 생성자 함수는 클래스가 인스턴스화될 때 실행되는 특수 함수입니다.
- 인스턴스 메소드는 객체의 메소드와 유사하게 클래스에 추가될 수 있습니다.
- static 키워드를 사용하여 클래스 메소드를 추가할 수 있습니다.