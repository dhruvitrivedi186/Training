string = ""
let n = 3
for (i = 0; i <= n + 7; i++) {
    for (j = 0; j <= n + 3; j++) {
        if (i == 0 && j == 3) {
            string += "o"
        }

        else if (i - j == -n || i - j == 0 && i >= 4 && i <= 6) {
            string += "\\"
        }
        else if (i + j == 3 || i + j == 6 && i >= 4 && i <= 6) {
            string += "/"
        }
        else if ((j == 2 || j == 4) && (i == 7 || i == 8 || i == 9)) {
            string += "|"
        }
        else if ((j == 3 && (i == 7 || i == 8 || i == 9)) || i == 10) {
            string += "="
        }
        else if (
            (
            (i - j) < -3 || (i + j) < 3) ||
            ((i * j) == 0 || (i * j) == 4 || (i * j) == 20 || (i * j) == 24 || (i * j) == 30) 
            && (i == 4 || i == 5) && (j!=4)
            ) {
            string += " "
        }
        else if ((i + j == 12 || i + j == 13 || i + j == 14 || i + j == 15 || ((i - j) == 6 || (i - j) == 7 || (i - j) == 8 || (i - j) == 9))
         && (i == 7 || i == 8 || i == 9)) {
            string += " "
        }
        else if(i==5 && j==5){
            string+="-"
        }
        else {
            string += "-"
        }
    }
    string += "\n"
}
console.log(string)
