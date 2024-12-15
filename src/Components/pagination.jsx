import React from "react";
import "./pagination.css";
function Pagina(totalPosts,nombreEltPage,setCurrentPage,currentPage){
    console.log("Props:", { totalPosts, nombreEltPage, setCurrentPage });
  let pages=[]
  for(let i=1 ; i<= Math.ceil(totalPosts/nombreEltPage);i++){
    pages.push(i)
  }
  return(
    <div>
        {pages.map((page,index)=>{
            return<button key={index} onClick={()=>setCurrentPage(page)} 
            className={page == currentPage ? "active" : ""}>{page}</button>;
        })}
        
    </div>
  )
}
export default Pagina;