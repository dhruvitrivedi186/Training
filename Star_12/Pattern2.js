string=""
let n=5
for(i=-(n+1);i<=(n+1);i++){
    temp_string=""
    for(j=-(n+1);j<=(n+1);j++){
        if((j==-(n+1) || j==(n+1)) ){
            temp_string+="O"
        }
         else if(i==-(n+1) || i==(n+1)){
             temp_string+="0"
        }
        else if(i<0 && j<0 && i-j>=0){
            temp_string+=Math.abs(j)
        }
        else if(i<0 && j>0 && i+j>=0){
            temp_string+=n-j+1
        }
        else if(i>0 && j<0 && i+j<0){
            temp_string+=n+j+1
        }
        else if(i>0 && j>0 && j-i<=0){
            temp_string+=j
        }
        else if(i==0 && j==0){
            temp_string+="O"
        }
        else{
            temp_string+=" "
        }
    }
    string+=temp_string+"\n"
} 
console.log(string)      
                                                                                               