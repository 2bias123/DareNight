import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

   //This method checks if the two password is not empty and that they match
   const passwordValidate = () =>{
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
        if(password !== confirmPassword){
            isValid = false
            setError('Passwords does not match')
        }
    }
    return isValid
}

 const registerUsr = (e)=>{
        if(passwordValidate()){
            createUserWithEmailAndPassword(auth,email,password).then((res)=>{
                console.log(res.user)
            })
            .catch(err => setError(err.message))
        }
        setEmail('')
        setPassword('')
        setConfirmedPassword('')
    }