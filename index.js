// import Head from 'next/head'
 // import Header from '@components/Header'
// import Footer from '@components/Footer'
import Img from "pages/nextProjct-icon.png";
import Image from "next/image";
import {motion} from "framer-motion"; 
import {useState} from "react";
export default function Home() {
  const [tO, setTO] = useState(false);
  const [xV, setXV] = useState("0vh");

  const RecruitButton = (props) =>{
    return(
      <motion.div
      animate = {props.animate}
      style = {{

        cursor: "pointer", 
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: "0vh",
        backgroundColor: "rgb(0, 100, 250)",
        borderRadius: "10vh 10vh 10vh 10vh",
        width: "20vh",
        height: "fit-content",
        marginRight: "-20vh", 
        opacity: 0, 
        display: props.display,
        position: "relative",
        top: "-4vh",
        left: "-3vh"
      }}>

        <h1
        style = {{
          color: "white",
          fontSize: "3.4vh",
          fontFamily: "serif",
        
        }}>{props.title}</h1>

        </motion.div>
    )
  }
  const Header = ({title, content}) =>{
  const [jC, setJC] = useState("center");

  const [bC, setBC] = useState(false);
  const [moveX, setMX] = useState(true);
 
    return(
      <div
      style = {{
        borderRadius: "2vh", 
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: "5vh",
        width: "80vh",
        display: "block", 
        flexDirection: "column",
        backgroundColor: "lightgrey",

      }}>

     
<div
style = {{
  backgroundColor: "none",
  fontSize: "10vh", 
  color: "#4a02ff",
  padding: "0vh",
  height: "fit-content", 
  width: "fit-content", 
  cursor: "pointer",
  display: "block", 
  

}}>
   =
</div>



<motion.div
animate = {{backgroundColor: bC? "grey" : "none"}}
style = {{

  borderRadius: "10vh",
  overflow: "hidden",
  alignSelf: "center",
 
  
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: jC,
  padding: "0vh"
}}> 

<motion.div  transition = {{duration: 1.1}} style = {{cursor: "pointer", width: "fit-content", height: "fit-content", backgroundColor: "blue", padding: "0vh", borderRadius: "50%", overflow: "hidden", display: "flex", marginRight: "0vh"}}>

  <Image onClick = {() =>{
 

     setMX(!moveX);
     setBC(!bC); 
     setTO(!tO); 

     

   }} layout = {"fixed"} objectFit = {"cover"} unoptimized = {false} src = {Img} height = {100} width = {100}   quality = {100} placeholder = {"blur"} />
    </motion.div>

    <RecruitButton title = "Recruit" display = {"flex"} animate = {{opacity: tO? 1: 0}} />
  </motion.div>
     
      <h1
style = {{
  color: "black",
  textDecoration: "underline", 
  textDecorationColor: "#4a02ff", 
  textDecorationSkip: "spaces",
}}>{title}</h1>

      </div>
    )
  
  }

  const Content = () =>{
    return(
      <div
      style = {{
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: "5vh", 
        backgroundColor: "lightgrey",
        margin: "5vh",
        borderRadius: "2vh",
        width: "90%",
        height: "fit-content"
      }}>


<h1 style = {{
  width: "100%",
  height: "fit-content",
  fontSize: "2.8vh",
  float: 'left'
}}>
        <h1
        style = {{
          textDecoration: "underline",
          float: "left",
          margin: "1vh",
   marginTop: "-5h",

  
        }}>About me..</h1>
</h1>


 <p
 style = {{
   fontSize: "5vh", 
   margin: "1vh",
   
 }}>
   I am a current 10th grade Highschool student. From Lynn Vocational Tech Insitiute,
   i specialize in the computer programming and web development shop and fields. 
   Along with these traits, i am also an active and competitve Boxer. Eqiped with knowledge about 
   technology; i aspire to reach great heights and make a great impact in our world.
   My goal is to learn, develop, apply, and evolve. All in order to make a great impact in our world. 
 </p>


        </div>
    )
  }
  return (
    <div className="container"
    style = {{
      height: "fit-content",
      padding: "5vh"
    }}>
      <Header title = "Anderson Blanco"/>
      <Content />
    </div>
  )
}
