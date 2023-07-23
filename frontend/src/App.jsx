// import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { userAdminLogin } from "./slices/iteamSlice";
// import { useNavigate } from "react-router-dom";

// function App() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const globalData = useSelector((state) => state.iteamSlice.userAdmin);

//   const userHandle = (event) => {
//     dispatch(userAdminLogin(event.target.value));
//     // console.log(event.target.value);
//   };
//   const adminHandle = (event) => {
//     dispatch(userAdminLogin(event.target.value));
//     // console.log(event.target.value);
//   };
//   const clickHandle = () => {
//     if (globalData === "user") {
//       navigate(`${globalData}`);
//     } else if (globalData === "admin") {
//       navigate(`${globalData}`);
//     }
//   };
//   return (
//     <div className="App">
//       <div>
//         <input value="user" onChange={userHandle} name="login" type="radio" />
//         <label>User</label>
//         <br />
//         <input value="admin" onChange={adminHandle} name="login" type="radio" />
//         <label>Admin</label>
//       </div>
//       <button onClick={clickHandle}>Next</button>
//     </div>
//   );
// }

// export default App;
