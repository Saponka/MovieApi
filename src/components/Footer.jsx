import React from "react";
import {Row, Col} from "react-bootstrap";

const Footer = ()=>{
    const year = new Date().getFullYear();
    const links=[
        {
          id:1,name:"Home",url:"/home"
        },
        {
            id:2,name:"Contacto",url:"/contacto"
        },
        {
            id:3,name:"About",url:"/about"
        },
        {
            id:4,name:"Redes",url:"/redes"
        },
    ]

    return(
        <div style={{height:"70px"}} className="d-grid align-items-center bg-dark text-light fixed-bottom " >
         {/* <Row style={{width:"100%",margin:"auto"}}>
             {links.map((link,index)=>(
                <Col xs={3} md={3} lg={3} className="d-flex justify-content-center p-0 bg-success " style={{height:"30px"}} key={index}>
                  <ul className="p-0 m-0">
                     <li style={{listStyle:"none"}} name={link.name}  url={link.url} >{link.name}</li>
                   <img imagen={link.imagen} src={link.imagen} alt="" />
                 </ul>
                </Col>
                  ))}
         </Row> */}
         
         <Row style={{margin:"auto"}}>
             <Col xs={3} md={3} lg={3}  className="d-flex justify-content-center  " > <a href="/"> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="lawngreen" className="bi bi-house-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
  </svg></a></Col>
             <Col xs={3} md={3} lg={3} className="d-flex justify-content-center"> <a href="https://www.linkedin.com/in/franco-ezequiel-herrera-ruiz-553876239/" style={{}} ><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg></a> </Col>
             <Col xs={3} md={3} lg={3} className="d-flex justify-content-center"> <a href="/contacto"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="lawngreen" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
  <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg></a> </Col>
             <Col xs={3} md={3} lg={3}  className="d-flex justify-content-center"><a href="https://github.com/Saponka/" target="blank" ><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a> </Col>
         </Row>
         
         <div className="text-center">
          ©Franco Herrera Ruiz {year}
         </div>
        </div>

    )
    
}
export default Footer;