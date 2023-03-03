const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");
console.log(punto);
punto.forEach((cadaPunto, i)=>{
    punto[i].addEventListener("click", ()=>{
        let posicion = i;
        let operacion = posicion * -25;
        grande.style.transform = `translateX(${operacion}%)`;
        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove("activo");
        });
        punto[i].classList.add("activo");
    });
});
const li = document.querySelectorAll(".li");
const bloque = document.querySelectorAll(".bloque");
li.forEach((cadaLi, i)=>{
    li[i].addEventListener("click", ()=>{
        li.forEach((cadaLi, i)=>{
            li[i].classList.remove("activo");
            bloque[i].classList.remove("activo");
        });
        li[i].classList.add("activo");
        bloque[i].classList.add("activo");
    });
});

//# sourceMappingURL=index.36584a6c.js.map
