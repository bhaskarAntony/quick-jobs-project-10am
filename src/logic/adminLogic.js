import { toast } from "react-toastify";

export function adminLogin(name, pass){
        if(name=="admin"){
            if(pass=="admin@123"){
                localStorage.setItem('admin', true);;
                toast.success("login succesfull");
            }
        }
}

export function isAuthenticated(){
    if(localStorage.getItem('admin')=='true'){
        return true;
    }else{
        return false;
    }
}

export function adminLogout(){
    localStorage.removeItem('admin');
    window.location.reload();
}

var alljobs = JSON.parse(localStorage.getItem('jobs')) || [];

export function getAllJobs(){
    return alljobs; //returning all jobns from localstarage
}