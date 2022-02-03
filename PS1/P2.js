const operator = expression => evaluate(expression)

const evaluate = exp => {
    first_num = ""
    second_num = ""
    operand = ""
    halfway_check = 0
    final = 0
    for (let i = 0; i<exp.length; i++) {
        if (!(exp[i] in ['0','1','2','3','4','5','6','7','8','9'])) {
            operand = exp[i]
            halfway_check = 1
        }
        else {
            if (halfway_check == 0) {
                first_num = first_num + exp[i]
            } else {
                second_num = second_num + exp[i]
            }
        }
    }

    first_num = parseInt(first_num)
    second_num = parseInt(second_num)

    //console.log(first_num)
    //console.log(operand)
    //console.log(second_num)
    
    if (operand == "+"){
        final = first_num+second_num
    } else if (operand == "*"){
        final = first_num*second_num
    } else if(operand == "-"){
        final = first_num-second_num
    } else if(operand == "/"){
        final = first_num/second_num
    } else if(operand == "^"){
        final = first_num^second_num
    } 

    return final
    
}

console.log(operator("8*3"))