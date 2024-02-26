//Fiz tudo só sabendo html e css, vi tutorial para o js
function filtrar() {
    var input,
        filter,
        ul,
        li,
        a,
        i,
        span,
        txtValue,
        count = 0;

    //elementos html
    input = document.getElementById('pesquisa');
    ul = document.getElementById('listap');

    //filtro
    filter = input.value.toUpperCase();

    //li lista
    li = ul.getElementsByTagName("li");

    //percorrer li
    for (i = 0; i < li.length; i++) {
        //pegar tag a
        a = li[i].getElementsByTagName("a")[0];
        //pegar o texto
        txtValue = a.textContent || a.innerText;
        //verificar o digitado
        if (txtValue.toUpperCase().indexOf(filter) > 0) {
            //se o valor bateu
            li[i].style.display = "";
            count = 1
            //pegar a tag span
            span = li[i].querySelector(".iten-name");
            if (span) {
                span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
                    return "<strong>" + match + "</strong>";
                })
            }
        } else {
            //não mostra o item da lista
            li[i].style.display = "none";
        }
    }

    if (count == 0) {
        ul.style.display = "none";
    } else {
        ul.style.display = "block";
    }
}

//porfavor não critique, fiquei 30min para fazer isso funcionar depois do codgo pronto :'(