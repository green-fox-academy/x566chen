'use strict';
const BlogPost = require('./BlogPost');

class Blog{
    constructor(list=[]){
        this.list = list;
    }
    add(BlogPost){
        this.list.push(BlogPost);
    }
    delete(int){
        this.list.splice(int-1,1);
    }

    update(int,BlogPost){
        this.list.splice(int-1,1,BlogPost);
    }


}

let obj1 = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
let obj2 = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
let obj3 = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');
let obj4 = new BlogPost('1111', 'One 22222', 'fwlfwhfwl.', '2017.03.28.');

let blog = new Blog();
blog.add(obj1);
blog.add(obj2);
blog.add(obj3);
console.log(blog.list);


blog.delete(2);
console.log(blog.list);
blog.update(1,obj4);
console.log(blog.list);