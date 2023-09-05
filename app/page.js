"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);



  
  const submitHandler = (e) => {
    e.preventDefault();

   const random_productivity_quotes = [
      "Productivity is my middle name, right after 'Pro' and 'crastination.' 😂",
      "Why work hard when you can work smartly at finding ways to avoid work? 🤔💼",
      "I'm so productive; I can turn a 5-minute task into an all-day project. 🕒🙃",
      "Productivity is overrated. Let's embrace the 'Snooze' button instead! ⏰😴",
      "Pro tip: Surround yourself with busy work to avoid actual work. 🪄🤷",
      "My superpower is being incredibly unproductive, yet making it look like I'm doing something important. 💪💤",
      "Productivity is like my Wi-Fi signal – it comes and goes as it pleases. 📶😅",
      "Why be productive when you can be creatively unproductive? It's an art form! 🎨📊",
      "I'll start being productive just as soon as Netflix asks me if I'm still watching. 🍿📺",
      "Productivity? Nah, I prefer the 'Winging It' strategy. Works like a charm! 🦚✨"
  ]



  
    if(title!=""&&desc!=""){
      setMainTask([...mainTask, {title, desc}])

      setTitle("");
      setDesc("");
      Swal.fire({
        icon: 'success',
        title: random_productivity_quotes[Math.floor(Math.random() * 10)],
        text: 'Task added successfully!'
      })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "It seems you've forgotten the ancient and sacred art of entering a task title and task description. Let's give it another go, shall we? 😏"
      })
    }
  };

  const deleteHandler = (i) =>{

    const quotes_After_Deletion = [
      "Task deleted! Well, now you have one less thing to not do. 😂📝",
      "Task vanished into thin air! Guess it was too productive for this world. 🚀💨",
      "Delete a task, and suddenly, the world seems so much emptier! 😅🪓",
      "You deleted a task? Congratulations, you just increased your productivity by 0.0001%! 📉🎉",
      "Task deleted. Now your to-do list is as light as a feather. Time for a victory dance! 💃🕺",
      "Deleting tasks like a pro! Just remember, less work, more... well, less work. 🤷‍♂️💼",
      "Task obliterated! It's like it never existed. The magic of productivity... or not. 🧙‍♂️✨",
      "One less task to conquer! You're practically an efficiency guru now. 😉🎯",
      "Deleted a task? That's one way to make your to-do list shorter and your day longer! ⏳🪚",
      "Task removed successfully! Now you can fill that precious space with more procrastination. 🌟📺"
    ];

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: quotes_After_Deletion[Math.floor(Math.random()*10)],
          text: "Task Deleted Successfully"
        })
        let copyTask =  [...mainTask];
        copyTask.splice(i,1);
        setMainTask(copyTask);
      }
    })
    
  }

  const completeHandler = (t) =>{
    console.log(i);
  }


  let renderTask = <div className=""id="no-tasks-container"> 
   
     <video autoPlay loop muted id="animation">
        <source src="/animation_lm694viq.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>📋 "Oops! No tasks in sight. Looks like your to-do list is as empty as a black hole in space! 😄 Why not brighten it up by adding some tasks below? 📝" 🚀 </h2>
  </div>
  

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
   
      return (
            <>
          <div key={i} className="ui container" id="tasks-container">          
        
            <div id="draggable" className="" >
         
            <h5 className="ui large header"><i class="calendar check outline icon"></i>{t.title}</h5>

            <p className="ui large text ">{t.desc}</p>
            </div>
        
            <div id="task-action-container">
              
            {/* <button className="ui green button" id="completed" onClick={()=>{
                completeHandler(i)
            }}>Mark as Completed</button> */}
               <button className="ui red button" id="delete" onClick={()=>{
                deleteHandler(i)
            }}>Delete <i id="delete-icon" class="close icon"></i></button>
            </div>
            

        </div>
        <hr className="ui "></hr>

        </>

        )
      
      })
  }
  return (
    <>
      <div className="ui container" id="app-header">
        <h1 className="ui huge header centered"> To Do List App</h1>

        <h2>Made by Anurag Choudhari ✌️</h2>

      </div>

      <form class="ui form" id="form"  onSubmit={submitHandler}>
        <div class="field" id="field">
          <label>Task title</label>
          <input
            type="text"
            name="tast-title"
            placeholder="Bring vegetables 🥕"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </div>
        <div class="field" id="field">
          <label>Task Description</label>
          <input
            type="text"
            name="task-desc"
            placeholder="Go to the market..."
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></input>
        </div>

        <button className="ui green button" id="add-task-btn" type="submit">
          Add Task <i id="task-icon" class="tasks icon"></i>
        </button>
      </form>
      <hr></hr>
      <div className="ui container" id="main-tasks-container">

            {renderTask}
  
      </div>

 
    </>
  );
}
