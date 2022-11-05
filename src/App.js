import { useState } from "react"

const users = [{userName: "caston", likes: 1000, caption: "Time to pour wine", image: "https://cdn.vox-cdn.com/thumbor/-jJGprIZWpPQ7KD5dSmjcogZfME=/0x0:1000x1000/1200x900/filters:focal(420x420:580x580)/cdn.vox-cdn.com/uploads/chorus_image/image/59517807/10960338_10152734380047881_1861353916523574001_o.0.0.0.0.jpeg"}, 
               {userName: "jane", likes: 2000, caption: "You are my angel"},
               {userName: "liza", likes: 3000, caption: "Time to pour wine"}]



function CommentLikeSec(props){
  
  const [value, setValue] = useState(1); 

  function someFunc() {
    setValue(value + 1)
    
  }
  
  return(
    <div> 
      <div id="comment-like"> 
        <button onClick={someFunc} id="like"></button> 
        <button id="comment"></button>
        </div> 
      
      <h6 id="number-likes">{value} likes </h6>
      <h5 id="post-user-name">{props.userName} </h5>
      <h5 id="users-post"> {props.caption}  </h5>
    </div>
  )
}


function Post(props) {
    console.log(props.obj.likes)
    let img = "https://cdn.vox-cdn.com/thumbor/-jJGprIZWpPQ7KD5dSmjcogZfME=/0x0:1000x1000/1200x900/filters:focal(420x420:580x580)/cdn.vox-cdn.com/uploads/chorus_image/image/59517807/10960338_10152734380047881_1861353916523574001_o.0.0.0.0.jpeg"
    return (
    <div id="post">
      <h5 id="username">{props.obj.userName}</h5>
      <img src={img} width="200px" height="200px"></img>
      <CommentLikeSec
            userName={props.obj.userName}
            likes={props.obj.likes}
            caption={props.obj.caption}
      />
    </div>
  )
}

function NavBar() {
  return (
    <div>
      <h1 id="nav-bar">Instagram</h1> 
    </div>
  )
}

function PostFeed() {
  return (
    <div> 

      {users.map(post => <Post obj={post} key={post.userName}/>)}


  {/* <Post
      userName={users[0].userName}
      likes={users[0].likes}
      caption={users[0].caption}
      
      /> 

  <Post
      userName={users[1].userName}
      likes={users[1].likes}
      caption={users[1].caption}
      
      /> 

  <Post
      userName={users[2].userName}
      likes={users[2].likes}
      caption={users[2].caption}
      
    />  */}
    </div>
  )
}


export default function App() {
  return (
    <div>
      <NavBar/>
      <PostFeed/>
    </div>
  )
}

