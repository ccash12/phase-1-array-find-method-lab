function superbowlWin(record) {
    const winningSeason = record.find(record => record.result === "W") 
    return !!winningSeason ? winningSeason.year : undefined;
}


 // find is going to iterate through each object in record. it is going to look at the results in each of the objects. it is going to check to see if the value of record.result is equal to this string ("W")

 // "!" bang operator inverts the truth value 
 // "!!" two bang operators 
 // "?" short hand for if 
 