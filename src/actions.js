export const inc =()=>({type:'INC'})
export const dec =()=>({type:'DEC'})
export const res =(value)=>{
    return  {type:'RES',value,value :Math.floor(Math.random() *10)}
}

