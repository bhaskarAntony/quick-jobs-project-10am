import { toast } from "react-toastify";

var usersdata = JSON.parse(localStorage.getItem('allusersdata')) || [];

export function register(name, userEmail, userPhone, userPassword){

    const isEmailExist = usersdata.find((item)=>item.email == userEmail);
    if(isEmailExist){
        toast.error("Email already exist")
    }else{
        const newuser = {
            username:name,
            email:userEmail,
            phonenumber:userPhone,
            password:userPassword
        }
        usersdata.push(newuser);
        localStorage.setItem('allusersdata', JSON.stringify(usersdata));
        toast.success("registration is successfull.")
    }
}


export function loginhandler(email, password){
    const user = usersdata.find((item)=>item.email == email);
    if(user){
        if(user.password == password){
            localStorage.setItem('isLogin', true);
            localStorage.setItem('mydata', JSON.stringify(user))
        }else{
            toast.error("invalid credentials");
            console.log("invalid credentials");
            
        }
    }else{
        toast.error("given email not exist")
        console.log('given email not exist');
        
    }
}


export function isAuthenticated(){
    if(localStorage.getItem('isLogin')){
        return true;
    }else{
        return false;
    }
}


export function logout(){
    localStorage.removeItem('isLogin');
    window.location.reload();
}

export function getprofile(){
    const user = JSON.parse(localStorage.getItem('mydata'));
    return user;
}

