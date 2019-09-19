class Student{
    constructor(name, learn_thing){
        this.name = name;
        this.learn_thing = learn_thing;
    }

    learn(){
        console.log(this.learn_thing);
    }

    question(Teacher){
        console.log('Teacher is answering questions');
    }
}

class Teacher{
    constructor(name){
        this.name = name;
    }

    teach(Student){
        console.log('')
    }
    answer(){
        console.log('')
    }
}

let student = new Student;
let teacher = new Teacher;
student.question(teacher);
teacher.teach(student);