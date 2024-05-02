let P=[];
let t=[];
let r; //input user
let k;//tugas r dan k input

//ini bisa juga jadi input
let P0 = 20;
let dt = 0.1;
let tmax = 15;

let grafik; //chart Js
    
function setup() {
  createCanvas(400, 600);
  
  k = createInput("100");
  k.position(500, 30)
  let q = createP('Carrying Capacity');
  q.style('fontsize', '14px');
  q.position(500,-10);
  
  r = createInput("0.35");
  r.position(10, 30)
  let p = createP('Growth Rate');
  p.style('fontsize', '14px');
  p.position(10,-10);
  
  solve(); //untuk inisiasi jalankan solve
  r.changed(solve); //jika input berganti, jalankan fungsi solve
  k.changed(solve);
  
  grafik = new Chart(this, config);
}

function draw() {
  background(220);
  
  grafik.update();
}

function solve(){
  
  P[0]=P0;
  t[0]=0;
  let rs=float(r.value())
  let kp=float(k.value())
  let iterNum = int(tmax/dt);
  
  for (i=0; i<iterNum; i++){
    P[i+1]=P[i] + dt * rs *P[i]*(1-P[i]/kp)
    t[i+1]=(i+1)*dt;
    
  } 
}