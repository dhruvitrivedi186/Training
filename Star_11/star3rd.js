string=""
n = 5
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        if (i == j){
            if (i == 2 && j==2) {
                string += "o"
            }
            else {
                string += "\\"
            }
        }
        else if(i+j==4){
            string+="/"
        
    }
        // else if (Math.abs(i - j) == 1 && i == 2 || j == 2) {
        // string += " "
    
        else if (i==0|| i == 4){
        string += "-"
        }
        else if (j==0|| j == 4){
        string += "|"
        }
    else{
        string+=" "
    }
}
string+="\n"
}
console.log(string)
