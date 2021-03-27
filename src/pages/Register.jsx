import React , { useContext, useEffect , useState } from 'react'
import './Register.css'
import firebaseApp from '../firebase.js'
import { useHistory } from 'react-router'
import  { UserContext } from '../context_api/user'


function Register() {
    const [user , setUser] = useContext(UserContext)
    const [bool, setBool] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const history = useHistory()
    const [error, setError] = useState()


    const SignUpHandle = (e) =>{
        setBool(true)
    }
    const LoginHandle = (e) =>{
        setBool(false)
    }
    console.log(window.location.pathname)
    useEffect(() => {
        if(window.location.pathname === "/register"){
            setBool(true)
        } else {
            setBool(false)
        }
    }, [])  
    const handleLogin = (e) =>{
      e.preventDefault()
      console.log("Login account")
      firebaseApp.auth().signInWithEmailAndPassword(email, password).then(function(result){
        console.log("result-> " , result)
        firebaseApp.database().ref("users").orderByChild("id").equalTo(result.user.uid).on("child_added", function(data){
          localStorage.setItem("Name", data.val().name);
          setUser({id : result.user.uid , name :  data.val().name})
          history.push('/')
        })
      }).catch(function(error) {
        console.log(error.code);
        console.log(error.message);
        setError(error.message)
     });
    }
    const handleSignUp = (e) =>{
      e.preventDefault()
      console.log("Creating account")
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then((result) =>{
          console.log("registering2")
          firebaseApp.database().ref(`users/${result.user.uid}`).set({name : name , id : result.user.uid}); 
          setUser({id : result.user.uid , name : name})
          console.log(user)
          console.log(result.user.uid)
          localStorage.setItem("Name", name);
          history.push('/')
      }).catch(function(error) {
        console.log(error)
        setError(error.message)
     });
    }

    return (
<section className="user">
  <div className="user_options-container">
    <div className="user_options-text">
      <div className="user_options-unregistered">
        <h2 className="user_unregistered-title">Don't have an account?</h2>
        <p className="user_unregistered-text"></p>
        <button onClick={(e) => SignUpHandle(e)} className="user_unregistered-signup" id="signup-button">Sign up</button>
      </div>

      <div className="user_options-registered">
        <h2 className="user_registered-title">Already have an account?</h2>
        <p className="user_registered-text"></p>
        <button onClick={(e) => LoginHandle(e)}  className="user_registered-login" id="login-button">Login</button>
      </div>
    </div>
    
    <div className={bool ? "user_options-forms bounceLeft" : "user_options-forms bounceRight" } id="user_options-forms">
      <div className="user_forms-login">
        <h2 className="forms_title">Login</h2>
        <form className="forms_form" onSubmit={(e) => handleLogin(e)} >
          <fieldset className="forms_fieldset">
            <div className="forms_field">
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" className="forms_field-input" required autofocus />
            </div>
            <div className="forms_field">
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" className="forms_field-input" required />
            </div>
          </fieldset>
          <h5 style={{color:"red"}} >{error ? error : ""}</h5>
          <div className="forms_buttons">
            <input type="submit" value="Log In" className="forms_buttons-action"/>
          </div>

        </form>
      </div>
      <div className="user_forms-signup">
        <h2 className="forms_title">Sign Up</h2>
        <form className="forms_form" onSubmit={(e) => handleSignUp(e)}>
          <fieldset className="forms_fieldset">
            <div className="forms_field">
              <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Full Name" className="forms_field-input" required />
            </div>
            <div className="forms_field">
              <input onChange={(e) => setEmail(e.target.value)} value={email}  type="email" placeholder="Email" className="forms_field-input" required />
            </div>
            <div className="forms_field">
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" className="forms_field-input" required />
            </div>
          </fieldset>
          <h5 style={{color:"red"}} >{error ? error : ""}</h5>
          <div className="forms_buttons">
            <input type="submit" value="Sign up" className="forms_buttons-action"/>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</section>

    )
}

export default Register
