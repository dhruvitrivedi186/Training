string = ""
n = 5
for (i = -(n + 1); i <= n + 1; i++) {
    for (j = -(n + 1); j <= n + 1; j++) {
        if (i == n + 1 || j == n + 1 || i == -(n + 1) || j == -(n + 1))
            string += "0 "
            else if (Math.sign(i) != Math.sign(j) && Math.abs(i) - Math.abs(j) >= 0 && j!=0) {
                string += Math.abs(i) - Math.abs(j) + 1+" "
            }
        else if (Math.sign(i) == Math.sign(j) && Math.abs(i) - Math.abs(j) >= 0 || j == 0) {
            string += String.fromCharCode((Math.abs(i) - Math.abs(j)) + 97)+ " "
        }
        
        else {
            string += "  "
        }
    }
    string += "\n"
}
console.log(string)

