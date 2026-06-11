```javascript id="r6s4mt"
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    }else{
        header.style.boxShadow = "none";
    }

});
```
