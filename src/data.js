export const API_KEY = 'AIzaSyCNTTVC-QUpiIZnu3CGpy9o4Uc_qkFwvU0'

export const valueConvert = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }else if(value >=1000){
        return Math.floor(value/1000)+"K";
    }else{
        return value;
    }
}
export const likeConvert = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }else if(value >=1000){
        return Math.floor(value/1000)+"K";
    }else{
        return value;
    }
}

