const asideNav=document.getElementsByClassName('asideNav');
const main=document.querySelector('main');

function navHidden(){
    var i=0;
    for(i=0;i<asideNav.length;i++){
        asideNav[i].style.marginRight='10%';
        asideNav[i].style.backgroundImage='none';
        asideNav[i].style.color='black';
    };
};

function navShow(nav){
    navHidden();
    nav.style.marginRight='0';
    nav.style.color='white';
    nav.style.backgroundImage="linear-gradient(90deg,rgba(76,97,144,0.9),rgba(152,168,189,0.7))";
}

const containers=document.getElementsByClassName('container');

function containShow(n){
    var j=0;
    for(j=0;j<containers.length;j++){
        containers[j].style.display='none';
    };
    containers[n].style.display='block';
}

const WH=document.querySelector('#WH');
WH.onclick=function(){
    navShow(WH);
    containShow(0);
}

const SF=document.querySelector('#SF');
SF.onclick=function(){
    navShow(SF);
    containShow(1);
}

const HC=document.querySelector('#HC');
HC.onclick=function(){
    navShow(HC);
    containShow(2);
}

const value=document.querySelector('#value');
value.onclick=function(){
    navShow(value);
    containShow(3);
}

const more=document.querySelector('#more');
more.onclick=function(){
    navShow(more);
    containShow(4);
}
