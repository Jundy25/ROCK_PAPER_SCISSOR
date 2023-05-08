var sy = 0;
var ay = 0;
function rock(){
    const pic = document.getElementById('pic');
    const pic2 = document.getElementById('pic2');
    pic.src="rock.png";
    pic.style.transform ='rotate(90deg)';
    let result = '';
    let random = Math.round(Math.random() * 2);

    if (random === 0){
        result = 'rock';
        pic2.src="rock2.png";
        pic2.style.transform = 'rotate(-90deg)';
        setTimeout(()=> {
        alert('Tie');
        },500);
        
    }else if(random === 1){
        pic2.src="paper2.png";
        pic2.style.transform = 'rotate(-90deg)';
        result = 'paper';
        ay = ay + 1;
        setTimeout(()=> {
        alert('You Lose!');
        document.getElementById('ai').innerHTML = ay;
        },500);
        
    }else if(random === 2){
        pic2.src="scissor2.png";
        pic2.style.transform = 'rotate(-90deg)';
        result = 'scissor';
        sy = sy + 1;
        setTimeout(()=> {
        alert('You Win!');
        document.getElementById('you').innerHTML = sy;
        },500);    
    }
}

function paper(){
    const pic = document.getElementById('pic');
    const pic2 = document.getElementById('pic2');
    pic.src="paper.png";
    pic.style.transform ='rotate(90deg)';
    let result = '';
    let random = Math.round(Math.random() * 2);

    if (random === 0){
        result = 'rock';
        pic2.src="rock2.png";
        pic2.style.transform = 'rotate(-90deg)';
        sy = sy + 1;
        setTimeout(()=> {
        alert('You Win!');
        document.getElementById('you').innerHTML = sy;
        },500);

    }else if(random === 1){
        pic2.src="paper2.png";
        pic2.style.transform = 'rotate(-90deg)';
        setTimeout(()=> {
        result = 'paper';
        alert('Tie');
        },500);

    }else if(random === 2){
        pic2.src="scissor2.png";
        pic2.style.transform = 'rotate(-90deg)';
        ay = ay + 1;
        setTimeout(()=> {
        result = 'scissor';
        alert('You Lose!');
        document.getElementById('ai').innerHTML = ay;
        },500);
    }
}

function scissor(){
    const pic = document.getElementById('pic');
    const pic2 = document.getElementById('pic2');
    pic.src="scissor.png";
    pic.style.transform ='rotate(90deg)';
    let result = '';
    let random = Math.round(Math.random() * 2);

    if (random === 0){
        result = 'rock';
        pic2.src="rock2.png";
        pic2.style.transform = 'rotate(-90deg)';
        ay = ay + 1;
        setTimeout(()=> {
        alert('You Lose!');
        document.getElementById('ai').innerHTML = ay;
        },500); 

    }else if(random === 1){
        pic2.src="paper2.png";
        pic2.style.transform = 'rotate(-90deg)';
        sy = sy + 1;
        setTimeout(()=> {
        result = 'paper';
        alert('You Win!');
        document.getElementById('you').innerHTML = sy;
        },500);

    }else if(random === 2){
        pic2.src="scissor2.png";
        pic2.style.transform = 'rotate(-90deg)';
        setTimeout(()=> {
        result = 'scissor';
        alert('Tie');
        },500);
    }
}