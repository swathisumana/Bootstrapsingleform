function fnformvalidation() {

}

function fnnamevalidation() {
    var name = document.getElementById("name").value;
    var nameval = /^[A-Za-z]+$/;

    if (name.match(nameval)) {
        var x = document.getElementById("uname");
        x.setAttribute('class', 'col-md-8 has-feedback has-success');
        var y = document.getElementById("n1");
        y.setAttribute('class', 'glyphicon glyphicon-ok form-control-feedback');
        /* x.appendChild(y);*/
    } else {
        var x = document.getElementById("uname");
        x.setAttribute('class', 'col-md-8 has-feedback has-error');
        var y = document.getElementById("n1");
        y.setAttribute('class', 'glyphicon glyphicon-remove form-control-feedback');
        /*x.appendChild(y);*/
    }
}

function fnamtvalidation() {
    var amnt = document.getElementById("amt").value;
    var amtval = /^[0-9]+$/;

    if (amnt.match(amtval)) {
        var x = document.getElementById("uamt");
        x.setAttribute('class', 'input-group col-md-8 has-feedback has-success');
        var y = document.getElementById("a1");
        y.setAttribute('class', 'glyphicon glyphicon-ok form-control-feedback');


    } else {

        var x = document.getElementById("uamt");
        x.setAttribute('class', 'input-group col-md-8 has-feedback has-error');
        var y = document.getElementById("a1");
        y.setAttribute('class', 'glyphicon glyphicon-remove form-control-feedback');
    }
}

function fnpwdvalidation() {
    var pasword = document.getElementById("pwd").value;
    var pwdval = /^[A-Za-z]+$/;

    if (pasword.match(pwdval)) {
        var x = document.getElementById("upwd");
        x.setAttribute('class', 'col-md-8 has-feedback has-success');
        var y = document.getElementById("p1");
        y.setAttribute('class', 'glyphicon glyphicon-ok form-control-feedback');

    } else {
        var x = document.getElementById("upwd");
        x.setAttribute('class', 'col-md-8 has-feedback has-error');
        var y = document.getElementById("p1");
        y.setAttribute('class', 'glyphicon glyphicon-remove form-control-feedback');

    }
}
