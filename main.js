// toán tử chuỗi là dùng dấu + nối 2 chuỗi lại với nhau
// so sánh  == != ...
//boolean true false
//if else  
//logic && || !
//kiểm tra dữ liệu

// tìm chỗi biến. indexOf('')
// cắt chuỗi biến. slice(vị trí bắt đầu muốn cắt, vị trí cuối cùng)
// cắt từ phải sang trái ta đếm từ phải (0) sang trái (số âm )
// viết hoa viết thường all: biến.toUpperCase
// biến.trim() loại bỏ khoảng trắng


// function run(title) {
//    var language;
//    var rest;
//    var start = 4;
//    var end = start + title.slice('Javascript').length;
//     language = title.slice(start, end);
//     rest = title.slice(end + 1);
// }



// function run(content) {
//     content.replace('JS', 'Javascript')
//     return content;
// }


// function run(a, b) {
//     console.log(a.toUpperCase);
//     console.log(b.toUpperCase);
    
//     return a + '|' + b;
// }



// function writeLog() {
//     var message = '';
//     for ( var log of arguments){
//         message = `${message} ${log}`;
//     }
//     console.log(message);
// }
// writeLog('hello', 'cc');


// function sum(a, b) {
//     if (!isNaN(a) && !isNaN(b)) {
//         return a + b;
//     }
//     else {
//         return false;
//     }
// }
// var result =  sum(3, 4);
// console.log(result);


// function sum(a, b) {
//     if (isNumberic(a) && !isNaN(b) ) {
//         return a + b;
//     }
//     else {
//         return false;
//     }
// }
// var result = sum(3, 4);
// console.log(result);



// function stringInString(needle, haystack){
//     if (typeof needle != "String" && typeof haystack != "String" ){
//         return false;
//     }
//     if (haystack.indexOf(needle)){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// []: tượng trưng cho biến



// cach su dung date
// var user =new Date();
// var year = user.getFullYear();
// console.log(year);



// var a = 10;
// switch(a){
//     case 2:
//         console.log('day la so 2');
//         break;
//     case 3:
//     console.log('day la so 3');
//         break;
//     case 4:
//         console.log('day la so 4');
//         break;
//     case 5:
//         console.log('day la so 5');
//         break;
//     default:
//         console.log('co cai cc');
// }
//// cach su dung Date


// forEach(): duyệt qua từng phần tử của mảng

// function getRequestBodyFromValues(formValues) {
//     var newObj = {};
//     formValues.forEach(function(formValues){
//         newObj[formValues.field] = formValues.value
//     })
//  return newObj;
// }
      
// function checkPositiveNumbers(numbers) {
//     for(var i of Object.values(numbers)){
//         return i > 0 ? true : false;
//     }
// }
// checkPositiveNumbers([1,2 ,-4])


// function hasFreeCourses(courses) {

//     var isSome = courses.some(function(mySome){
//         return mySome.vnd === 0;
        
//     })
//     console.log(isSome);
// }

// hasFreeCourses([
//     { name: 'Javascript', vnd: 0 },
//     { name: 'PHP', vnd: 990000 },
//     { name: 'HTML, CSS', vnd: 0 }
   
// ])



// function findAMonsterByAttack(monsters) {
//     var myFind = monsters.find(function(monster){
//         return monster.attack === 150 
//     }) || null
//     console.log(myFind);
// }
// findAMonsterByAttack([
//     {
//         name: 'Cá heo',
//         attack: 50,
//         speed: 100,
//         hitpoint: 100,
//     },
//     {
//         name: 'Khủng long',
//         attack: 50,
//         speed: 80,
//         hitpoint: 180,
//     },
    
// ])

// var newArray = [
//     {
//         id: 1,
//         name: 'html',
//         coin: 0
//     },
//     {
//         id: 2,
//         name: 'css',
//         coin: 250
//     },
//     {
//         id: 3,
//         name: 'js',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'php',
//         coin: 0
//     }
// ]

// var isTrue = newArray.filter(function(getArray, index){
//     return getArray.coin === 250 ;
// })
// console.log(isTrue);

// function findStringsInArrayByKeyword(keyword, strings) {
//   var newArray = [];
//     for (  var i = 0; i < strings.length; i++){
//         if(strings[i].includes(keyword)){
//             newArray.push(strings[i])
//         }
//     }
//     return newArray;
// }


// function findStringsInArrayByKeyword(keyword, strings) {
//     strings.filter(function(string){
//         return string.includes(keyword);
//     })
      
//   }

// array1 =  [1, 2, 6, 8],
// array2=  [2, 9, 6]

//     var newArray = [];
//     for (var i = 0; i<array1.length; i++){
//       for (var j = 0; j < array2.length; j++){
//         if (array1[i] === array2[j] ){   
//           newArray.push(array1[i])
//         }
       
//       }
      
//     }
//     console.log(newArray);


/////////////////////////////////
// function convertToBoolean(inputs) {
    
//     var a = [];
//     for(var i = 0; i < inputs.length; i++){
//         a.push(Boolean(inputs[i]))
//     }
//     console.log(a);
// }
// convertToBoolean([1, 'hi', false, 8, undefined, '', NaN])


///////////////////////////
// function run(inputs) {

//     var a = inputs.map(function(input){
//         return input * 3
//     })
//     console.log(a);
// }
// run([1, -2, 3])


/////////////////////////////
// function convertToNumber(inputs) {
//     var a = inputs.map(function(input){
//         return Number(input)
//     })
//     console.log(a);
// }
// convertToNumber(['1', '2', '3'])

///////////////////////////////////
// function convertToString(numbers) {
//   var a =  numbers.map(function(number){
//         return String(number)
//     })
//     console.log(a);

// }
// convertToString([1, 2, 3])





//////////////////////////////////
// var isSum= 0;
// function sumNumbers(inputs) {
//     for(var i = 0; i < inputs.length; i++){
//       if(typeof inputs[i] === 'number' && !isNaN(inputs[i])){
//         isSum = isSum + inputs[i]
//       }
//     }
//     console.log(isSum);
// }
// sumNumbers([1, 2, 8, 'hi', undefined, {}, [], NaN])

//////////////////////////
// function sumNumbers(inputs) {
//   var isSum = inputs.reduce(function(input, currentValue){
   
// }
// sumNumbers([1, 2, 8, {}])


/////////////////////////////////////
// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// var canary = new Bird("Tweety");
// var ownProps = [];
// for ( var i in canary) {
//   if (canary.hasOwnProperty(i)){ // nếu canary còn i thì sẽ làm tiếp

//     ownProps.push(canary[i])
//   }
// }
// console.log(ownProps);



////////////////////////////////
// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.numLegs = 4;

// let beagle = new Dog("Snoopy");

// let ownProps = [];
// let prototypeProps = [];
// for( var i in beagle ){
//   if(beagle.hasOwnProperty(i)){
//     ownProps.push(i)
//   }
//   else{
//     prototypeProps.push(i)
//   }
// }

// console.log(ownProps);
// console.log(prototypeProps);



/////////////////////////////
// function Dog(name) {
//   this.name = name;
// }
// function joinDogFraternity(candidate) {
//   if (candidate.constructor === Dog){
//     return true;
//   }
//   else{
//     return false;
//   }
// }

// // Setup
// var lastName = "Lovelace";
// var secondToLastLetterOfLastName = lastName[lastName.length - 5]; 
// console.log(secondToLastLetterOfLastName);


//




 
// function multiplyAll(arr) {
//     var product = 1;
//     for(var i = 0; i < arr.length; i++){
//         for(var j = 0; j < arr[i].length; j++){
//             product *= arr[i][j]
//         }
//     }
//     console.log(product);
//   }
  
//   multiplyAll([[1,2],[3,4],[5,6,7]]);


/////////////////// Callback 1
// function myFun(param){
//     console.log('value: ', param);
// }
// function newFun(hello){
//     hello(123) /// param === 123
// }

// newFun(myFun) /// myFun = hello



// var courses = [
//     'html',
//     'css',
//     'java'
// ]
// Array.prototype.map2= function(callBack){
//     coursesLength = courses.length;
//     var newArray = [];
//     for(var i = 0; i < coursesLength; i++){
//         var a = callBack(this[i])
//         newArray.push(a);
//     }
    
//     return newArray;
// }

// var html = courses.map2(function(course){
//     return `${course}`
// })
// console.log(html.join(' '));



// var courses = [
//     {
//         name: 'F8'
//     },
//     {
//         name: 'hello F8'
//     }

// ]


// var f = courses.filter(function(course){
//     return  course['name'].includes('F8');
// })
// console.log(f);


// var f8LinkElement = document.querySelector('a:first-child')

// var f8ShortLink = f8LinkElement.getAttribute('href')

// // var f8LinkElement2 = document.querySelector('a:nth-child(2)')

// document.querySelector('a:nth-child(2)').setAttribute('herf',  f8ShortLink )

// document.querySelector('div').setAttribute('data-url', f8ShortLink)


// var h1Element = document.querySelector('div')
// textNode1 = h1Element.firstChild
// console.log(textNode1);
// console.log([h1Element]);

// document.querySelector('.children1').classList.add('red');

// setInterval(() => {
// // document.querySelector('.children1').classList.toggle('red');
    
// }, 1000);




// var users = [
//     {
//         id: 1,
//         name: "Cuong"
//     },
//     {
//         id: 2,
//         name: "Hoang"
//     },
//     {
//         id: 3,
//         name: "Kim"
//     }
// ]


// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'hi'
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'ba'
//     }
// ]

// getUsers

// function getCmts(){
//     return new Promise(function(resolve){
//         resolve(comments)
//     })
// }

// getCmts()
// .then(function(comments){
//     var getCmt = comments.map(function(comment){
//         return comment.user_id
//     })
//     console.log(getCmt);
//     return getUsers(getCmt)
//         .then(function(){
//             return {
//                 users: users,
//                 comments: comments,
//             }
//         })
//         .then(function(data){
//             var a = document.getElementById('cmt')
//             var html = ''
//             data.comments.forEach(function(comment){
//                 var b = data.users.find(function(user){
//                     return user.id === comment.user_id
//                 })
//                 html += `${b.name}: ${comment.content}`
//             })
//             a.innerHTML =html
//         })

// })


// function getUsers(getCmt){
//     return new Promise(function(resolve){
//         var getUser = users.filter(function(user){
//             return getCmt.includes(user.id)
//         })  
//         resolve(getUser)
//     })
// }



// function getComments(){
//     return new Promise(function(resolve){
//         resolve(comments)
//     })
// }

// getComments()
//     .then(function(comments){
//         var getComment = comments.map(function(comment){
//             return comment.user_id
//         })
//         // getComment === 1, 2, ....

//         return getUsers(getComment)
//             .then(function(){
//                 return {
//                     users: users,
//                     comments: comments,
//                 }
//             })
//             .then(function(data){
//                 var a = document.getElementById('cmt')
//                 var html =''
//             data.comments.forEach(function(comment){
//                     var b = data.users.find(function(user){
//                         return comment.user_id === user.id
//                     })
//                         console.log(comment);
//                         console.log(b);
//                     html += `${b.name}: ${comment.content}`
//                 })
//                 // console.log(html);
                
//             })
//     })



// function getUsers(getComment){
//     return new Promise(function(resolve){
//         var userId = users.filter(function(user){
//             return getComment.includes(user.id)
//         })
//         resolve(userId)
//     })
// }







// fake api

/// lay comment
//     function getComments() {
//         return new Promise(function(resolve){
//             setTimeout(() => {
//                 resolve(comments)
//             }, 1000);
//         })
//     }
// getComments()
// .then(function(comments){
//     var UserIds = comments.map(function(comment){
//         return comment.user_id
//     })
// })

// function getUser(UserIds){
//     return new Promise(function(resolve){
//         var result = users.filter(function(user){
//             return UserIds.includes(user.id)
//         })
//         setTimeout(() => {
//             resolve(result)
//         }, 1000);
//     })
// }
// getUser([1,2])
// .then(function(result){
// console.log(result);
// })



/// tu comment lay ra user_id


///  tu user_id lay ra user tuong ung voi id




    // getComments()
//         .then(function(comments){
//             var getComment = comments.map(function(comment){
//                 return comment.user_id
//             })
//         return getUsers(getComment)
//             .then(function(users){
//             return {
//                 users: users,
//                 comments: comments,
//             }
//         })
//        .then(function(data){
//             var cmtBox = document.getElementById('cmt')
//            var  html = ''
//             data.comments.forEach(function(comment){
//                 var user = data.users.find(function(user){
//                     return user.id === comment.user_id
//                 })
//                 html += `<li>${user.name}: ${comment.content}</li>`
//             });
//             cmtBox.innerHTML = html
//             // console.log(html);
//         })  })


// var test = 'https://jsonplaceholder.typicode.com/users'

// fetch(test)
//     .then(function(response){
//        return response.json()
//     })
//     .then(function(data){
//       var  html = ''
//       var a = document.getElementById('cmt')
//         var user = data.map(function(datas){
//             return html += `<li>
//                 <h2>${datas.name}</h2>
//                 <p>${datas.email}</p>
//                 <p>${datas.phone}</p>
                
//             </li>`
//         })
//         a.innerHTML = html
        
//     })


// var test ='http://localhost:3000/posts'

// fetch(test)
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     var a = document.getElementById('cmt')
//     var html = ''
//     var getInfo = data.map(function(datas){
//     return html += `<li>
//         <h2>${datas.name}</h2>
//         <p>${datas.age}</p>
//         <p>${datas.Andress}</p>
//     </li>` 
//     })
//     a.innerHTML = html
// })





// var CoursesAPI = 'http://localhost:3000/posts'
// function start(){
//     getCourses(render)
//     HandleForm()
// }
// start()
// function getCourses(courses){
//     fetch(CoursesAPI)
//         .then(function(response){
//             return response.json()
//         })
//         .then(courses)
// }
// function render(courses){
//     var listCourses = document.querySelector('#cmt')
//     var html = courses.map(function(course){
//         return `
//         <li>
//             <h2>${course.name}</h2>
//             <p>${course.age}</p>
//             <p>${course.Andress}</p>
//         </li>`
//     })
//     listCourses.innerHTML = html
// }
// function HandleForm(){
//     var createBtn = document.querySelector('#create')
//     createBtn.onclick = function(){
//         var name = document.querySelector('input[name="name"]').value
//         var age = document.querySelector('input[name="age"]').value
//         var formData = {
//             name: name, 
//             age: age
//         };
//         createCourse(formData, function(){
//             getCourses(render)
//         })
//     }
// }

// function createCourse(data, callback){
//     var option = {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json'},
//         body: JSON.stringify(data) 
//     }
//     fetch(CoursesAPI, option)
//     .then(function(response){
//         return response.json()
//     })
//     .then(callback)
// }



// var API = "http://localhost:3000/posts"

// function start(){
//     getCourse(function(courses){
//         render(courses) 
//     })
// }
// start()

// function getCourse(courses){
//     fetch(API)
//     .then(function(response){
//         return response.json()
//     })
//     .then(courses) // goij ngược lại render dòng 766
// }



// function render(courses){ // vì chung callback nên dòng 781-794 được gọi vào dòng 776
//     var a = document.querySelector('#cmt')
//     var html = courses.map(function(course){
//         return `
//         <li>
//             <h2>${course.name}</h2>
//             <p>${course.age}</p>
//             <p>${course.Andress}</p> 
//         </li>
//         `
//     })
//     a.innerHTML = html
    
// }


// var API = "http://localhost:3000/posts"

// function start(){
//     getAPI(render)
//     handleForm()
   
// }
// start()


// function getAPI(callback){
//     fetch(API)
//     .then(function(response){
//         return response.json()
//     })
//     .then(callback)
// }
// // callback chính là hàm render
// function render(courses){
//     var a = document.querySelector('#cmt')
//     var html = courses.map(function(course){
//         return `
//         <li>
//             <h2>${course.name}</h2>
//             <p>${course.age}</p>
//             <p>${course.andress}</p> 
//         </li>`
//     })
//     a.innerHTML = html.join('')
// }



// function handleForm(){
//     var btnForm = document.querySelector('#create')
//         btnForm.onclick = function(){
//         var name = document.querySelector('input[name="name"]').value
//         var age = document.querySelector('input[name="age"]').value
//         var andress = document.querySelector('input[name="andress"]').value
//         var formData = {
//             name: name,
//             age: age,
//             andress: andress
//         }
//         createCourse(formData)
//     }
// }

// // formData = data
// function createCourse(data, callback){
//     var option = {
//                 method: 'POST',
//                 headers: {
//                 'Content-Type': 'application/json'},
//                 body: JSON.stringify(data) 
//     }
//     fetch(API, option)
//     .then(function(response){
//         return response.json
//     })
//     .then(callback) // gọi đến hamf render để render ra màn hình 
// }




var API = 'http://localhost:3000/posts'

function start(){
    getCourses(render)
    handleForm()
    handleFixForm(render)
}
start()

function getCourses(callback){
    fetch(API)
    .then(function(response){
        return response.json()
    })
    .then(callback)
}

function render(courses){
    var a = document.querySelector('#cmt')

    var html = courses.map(function(course){
        return `
            <li class="course-item-${course.id}">
                <h2>Name: ${course.name}</h2>
                <p> Age: ${course.age}</p>
                <p> Andress: ${course.andress}</p>
                <p>Id: ${course.id}</p>
                <button class = "deleteBtn" onclick= deleteData(${course.id})> Xóa </button>

            </li>`
    })
    a.innerHTML = html
}

function handleForm(){
    var btnForm = document.querySelector('#create')
    btnForm.onclick = function(){
        var name = document.querySelector('input[name="name"]').value
        var age = document.querySelector('input[name="age"]').value
        var andress = document.querySelector('input[name="andress"]').value
        var full = {
            name: name,
            age: age,
            andress: andress
        }
        putData(full)
    }
}

function putData(data, callback){
    var option = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'},
        body: JSON.stringify(data) 
    }
    fetch(API, option)
    .then(function(response){
        return response.json()
    })
    .then(callback)
}

function deleteData(id){
    
    var option = {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'},
       
    }
    fetch(API + '/' + id, option)
    .then(function(response){
        return response.json()
    })
    .then(function(){
        var getItem = document.querySelector('.course-item-'+id)
        if(getItem){
            getItem.remove()
        }
    })
}

function handleFixForm(){
    var btnForm = document.querySelector('#create')
    var name = document.querySelector('input[name="name"]').value
    var age = document.querySelector('input[name="age"]').value
    var andress = document.querySelector('input[name="andress"]').value
    var btnFix = document.querySelector('#fix')
    btnFix.onclick = function(name, age, andress){
        var newName = document.querySelector('input[name="name"]').value
        var newAge = document.querySelector('input[name="age"]').value
        var newAndress = document.querySelector('input[name="andress"]').value

        name = newName;
        age = newAge;
        andress = newAndress

        var fixFull = {
            name: name,
            age: age,
            andress: andress
        }
        fixData(fixFull)
    }
}

function fixData(data, callback){
    var getId = document.querySelector('input[name="id"]').value
    var option = {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'},
        body: JSON.stringify(data) 
    }
    fetch(API + '/' + getId, option)
    .then(function(response){
        return response.json()
    })
    .then(callback)
}

