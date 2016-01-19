var arr = [2, 4];

function CilinderVolume(arr){
    var cylinderVolume = Math.PI * Math.pow(arr[0], 2) * arr[1];
    console.log(cylinderVolume.toFixed(3));
}