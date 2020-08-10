const ages =[13, 15, 16, 18, 20];
const ages2= [12, 17, 21];
const ages3= [26, 20, 45, 30];
const ages4 =[45, 23, 78, 45];

const allAges= ages.concat(ages2).concat(ages3).concat([5]).concat(ages4);
const allages2= [...ages, ...ages2, 5, ...ages3, ...ages4];

// console.log(allages2);

const business =650;
const minister = 450;
const sochib = 250;
const takaPoisa =[650, 450, 250];
const maximum =Math.max(...takaPoisa);
// const maximum =Math.max(business, minister, sochib);
console.log(maximum);

