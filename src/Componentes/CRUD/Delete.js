import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function Delete() {
  const params = useParams();

  useEffect(() => {
    const response = axios
      .delete(`https://ironrest.herokuapp.com/recipes/${params._id}`)
      try{
          console.log(response)
      } catch(err){
          console.error(err)
      }
  });

  return(
      <p> Deletando ...</p>
  )
}
