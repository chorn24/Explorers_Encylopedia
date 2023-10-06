console.log("TEEHEE")

async function fetch_API(input) {
    var input = document.getElementById("Search").value;
     const response = await fetch(`https://www.dnd5eapi.co/api/${input}`);
        const API = await response.json();
        document.getElementById("ResultText").innerHTML = JSON.stringify(API);
    }