function addClass(el, newClass) {
    if(el.className.indexOf(newClass) !== -1) {
        return;
    }

    if(el.className !== '') {
        // ensures className is seperated by space
        newClass = ' ' + newClass;
    }

    el.className += newClass;
}