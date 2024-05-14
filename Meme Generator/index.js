const url = "https://meme-api.com/gimme/wholesomememes";
       const btn = document.querySelector("#btn");
       const imgContainer = document.querySelector("#img-container");

       const getMeme = async ()=>{
        let response = await fetch(url);
        let data = await response.json();
        let imgElement = document.createElement("img");
        imgElement.src = data.url;
        imgElement.style.width = "100%";
        imgElement.style.height = "100%";
        imgContainer.innerHTML = "";
        imgContainer.appendChild(imgElement);
       }

       btn.addEventListener("click",getMeme);
     