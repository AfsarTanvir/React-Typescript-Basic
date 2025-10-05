import { Link } from "react-router-dom";

function Error404({title}: {title:string}) {
  return (
    <>
      <h1> Page Not Found - {title}</h1>
      <div>
        <Link to="/">Home Page</Link>
        <img
          /* style={{ width: "100%", height: "100%" }} */
          src="/src/Images/image.jpg"
        />
      </div>
    </>
  );
}

export default Error404;