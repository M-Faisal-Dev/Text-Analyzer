import React,{useState} from 'react';



const About = () => {
  const [myStyle, setMystyle] = useState({background: "black",
color :"red" });

const [btnText, setBtn] = useState("Enable Light mode")

let changeStyle = () =>{
  if(myStyle.color === "red"){
    setMystyle(
      {background: "white",
       color :"black" }
    )
    setBtn("Enable Dark Mode")

  }else {
    setMystyle(
      {background: "black",
color :"red" }
    )
    setBtn("Enable Light Mode")


    }
}
    return (
        <>
<div className='ctn' style={myStyle}> <h1>this is faisal </h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero ut ea quas error temporibus eius id natus, dolorem voluptas iusto debitis facere voluptatibus quae corrupti? Delectus quo exercitationem voluptatibus magni?</p>
<br />
<hr />
<div> 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magnam, dicta culpa dolor aut a consectetur totam quae enim minus molestiae iusto! Recusandae quidem rem porro possimus doloribus, quis nesciunt.
</div>
<br />
<hr />
<div> 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magnam, dicta culpa dolor aut a consectetur totam quae enim minus molestiae iusto! Recusandae quidem rem porro possimus doloribus, quis nesciunt.
</div>

<button onClick={changeStyle}>{btnText}</button>
</div>

</>
    );
}

export default About;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// const About = () => {

//   const navigate = useNavigate();
//   const goToContact = ()=>{
//     navigate("../contact")
//   }
//   const nav = ()=>{
//     navigate (-1)
//   }
//   return (
//     <div>
//     <button onClick={()=>goToContact()}>button</button>
//       <section> this is about page</section>
//       <button onClick={()=>{
//         nav();
//       }}> goBack</button>
//     </div>
//   );
// }

// export default About;
