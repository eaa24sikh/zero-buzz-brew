/*bruges til at diagerer dig til anden side når ja eller nej bliver trykket på*/

document.getElementById("over18").addEventListener("change", (event) => {
    console.log('bing');
    console.log(event)
    console.log(event.target.value)
    if (event.target.value == 'ja') {
        
        window.location.href = "forside.html"; // Skift til din ønskede side
    }
}
);

document.getElementById("under18").addEventListener("change", (event) => {
    console.log('bing');
    console.log(event)
    console.log(event.target.value)
    if (event.target.value == 'nej') {
        
        window.location.href = "ikkegammelnok.html"; // Skift til din ønskede side
    }
}
);
