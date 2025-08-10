import { Link } from "react-router-dom";
import { all } from "../../../lib/db";


export default function Index() {
  //for git check
  
  // all('categories');
  return (
    <>
<h1>category index</h1>
<Link to="/createcategory">Create</Link>
</>
  )
}

