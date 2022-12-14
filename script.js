const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width= window.innerWidth;




function Linedesign(){
    const particleArray =[];
let hue = 0;

const mouse={
    x:undefined,
    y:undefined,
}

window.addEventListener('click',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    for(i=0;i<100;i++){
        particleArray.push(new Particle())
    }
    
})


canvas.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    for(i=0;i<2;i++){
        particleArray.push(new Particle())
    }
   
    
})



class Particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random()*13 + 1;
        this.speedX = Math.random()*3 -1.5;
        this.speedY = Math.random()*3 -1.5;
        this.color = 'hsl('+ hue + ',100%, 50%)';
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size >= 0.2){
            this.size -= 0.2;
        }
        
    }
    draw(){
        ctx.fillStyle=this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size,0, Math.PI*2);
        ctx.fill();
    }
}



function handdleParticle(){
    for(i=0; i<particleArray.length;i++){
        particleArray[i].update();
        particleArray[i].draw();
       
            for(j=i; j<particleArray.length;j++){
                const dx = particleArray[i].x - particleArray[j].x;
                const dy = particleArray[i].y -particleArray[j].y;
                const distance = Math.sqrt(dx*dx - dy*dy);
                
                if (distance < 100){
                    ctx.beginPath();
                    ctx.strokeStyle = particleArray[i].color;
                    ctx.lineWidth =  particleArray[i].size/2;
                    ctx.moveTo(particleArray[i].x,particleArray[i].y);
                    ctx.lineTo(particleArray[j].x,particleArray[j].y);
                    ctx.stroke();
                }


            }
            if(particleArray[i].size <= 0.2){
                particleArray.splice(i,1);
                i --;
            
        }

    }
}

function animate(){
    // ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='rgba(0,0,0,1)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    handdleParticle();
    hue += 12;
    requestAnimationFrame(animate);
}

animate()
}


function Taildesign(){
    const particleArray =[];
    let hue = 0;
    
    const mouse={
        x:undefined,
        y:undefined,
    }
    
    window.addEventListener('click',function(event){
        mouse.x=event.x;
        mouse.y=event.y;
        for(i=0;i<100;i++){
            particleArray.push(new Particle())
        }
        
    })
    
    
    canvas.addEventListener('mousemove',function(event){
        mouse.x=event.x;
        mouse.y=event.y;
        for(i=0;i<50;i++){
            particleArray.push(new Particle())
        }
       
        
    })
    
    
    
    class Particle{
        constructor(){
            this.x = mouse.x;
            this.y = mouse.y;
            this.size = Math.random()*13 + 1;
            this.speedX = Math.random()*3 -1.5;
            this.speedY = Math.random()*3 -1.5;
            this.color = 'hsl('+ hue + ',100%, 50%)';
        }
        update(){
            this.x += this.speedX;
            this.y += this.speedY;
            if(this.size > 0.2){
                this.size -= 0.2;
            }
            
        }
        draw(){
            ctx.fillStyle=this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size,0, Math.PI*2);
            ctx.fill();
        }
    }
    console.log(particleArray);
    
    function handdleParticle(){
        for(i=0; i<particleArray.length;i++){
            particleArray[i].update();
            particleArray[i].draw();
                if(particleArray[i] <= 0.2){
                    particleArray.splice(i,1);
                    i --;
                
            }
    
        }
    }
    
    function animate(){
        // ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle='rgba(0,0,0,0.03)';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        handdleParticle();
        hue += 3;
        requestAnimationFrame(animate);
    }
    
    animate()
}


Linedesign()

 
