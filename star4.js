let n=5
//let m=5
string=""

for(i=0;i<=n;i++){
    for(j=-n;j<=n;j++){
        if(i-Math.abs(j)>=0){
        string+=(i-Math.abs(j)+1)
        //                 console.log(string)
        }
        //string+=" "
        else{
            string+=" "
        }
    }
    string+="\n"
}

console.log(string)