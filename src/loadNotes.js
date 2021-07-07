function loadNotes(notes, setNotes) {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( keys[i]) ;
        values.push( localStorage.getItem(keys[i]) );
        let id = keys[i].replace(/[a-zA-Z.]+$/, "");
        console.log(id);
        if (keys[i].includes('noteTitle')) {

        }
        
    }
    console.log(values);
}

export default loadNotes