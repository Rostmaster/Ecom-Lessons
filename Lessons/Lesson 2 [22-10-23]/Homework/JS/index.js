function func() {
    let x=document.getElementsByClassName("bold-second-word");  // Find the elements
    for(p in x) {
        p.innerText="Hello JavaScript!";    // Change the content
    }
}

func();