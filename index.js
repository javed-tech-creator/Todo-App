

// Firstly Storing some data ...

let todoList=[
    {
        item:"Fresh",
        dueDate:"2024/10/04",
        time:"04:40"
    },
    {
        item:"Tea",
        dueDate:"2024/10/06",
         time:"05:40"
    }
];


// Displaying our pre Stored data ............

displayItems();

//  Function Of clicking Button .....

function addTodo(){

    //  Fetching our html Element ......

    let inputElement=document.querySelector("#todo-input");
    let dateElement=document.querySelector("#todo-date");
    let timeElement=document.querySelector("#todo-time");

    // Fetching our Html Element value ....

   let todoItem=inputElement.value;
   let tododate=dateElement.value;
   let todotime=timeElement.value;

//    Pushing our entered data into array

   todoList.push({item:todoItem,dueDate:tododate,time:todotime});

//    Emptying our Html element data 

   inputElement.value="";
   dateElement.value="";
   timeElement.value="";

//    Displaying the data items on the screen by calling function....

   displayItems();

//     storing the data in Local storage.................

   const data=JSON.stringify(todoList);
   localStorage.setItem("data",data);
  

}

//  displaying the data of list on the screen .................

function displayItems(){

    let containerElement=document.querySelector(".todo-container");

    let newHtml='';

    
    for(let i=0; i<todoList.length; i++){
       
        let{item,dueDate,time}=todoList[i];
        newHtml += ` 
                          <span>${item}</span> 
                         <span>${dueDate}</span>
                          <span>${time}</span>
                         
                         <button class="btn-delete" onclick="todoList.splice(${i},1); displayItems();">Delete</button> `
        
                
       
    }
    containerElement.style.fontSize="25px";
    containerElement.innerHTML =newHtml;
}

//  Animation Area Code...........................................

gsap.from('.grid-container #todo-input', {
    x: -1000,
    duration: 2,
   
  });

  gsap.from('.grid-container #todo-date', {
    y: -1000,
    duration: 2,
   
  });

  gsap.from('.grid-container #todo-time', {
    y: 1000,
    duration: 2, 
  });

  gsap.from('.grid-container #todo-btn', {
    x: 1000,
    duration: 2 , 
  });

  gsap.from('#main-heading', {
    scale:0,
    delay:2,
    duration:1,

  });