const reverse_alphabet_str = str => {
    len_str = str.length;
    str_arr = str.split("");
    new_str = ""
    for (let i = 0; i<len_str; i++){
        for (let j = i; j<len_str; j++) {
            if (str_arr[i] < str_arr[j]) {
                holder = str_arr[j]
                str_arr[j] = str_arr[i]
                str_arr[i] = holder
            }
        }
        new_str = new_str + str_arr[i]
    }
    return (new_str);
}


console.log(reverse_alphabet_str("supercalifragilisticexpialidocious"))