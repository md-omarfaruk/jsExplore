function getFullName(firstName, lastName){
    let fullName = '';

    for (let i = 0; i<arguments.length; i++){
        const namePart = arguments[i];
        fullName = fullName + ' ' + namePart;
    }
    return fullName;
}

const name = getFullName('Md', 'Omar', 'Faruk', 'Joy');
    console.log(name);