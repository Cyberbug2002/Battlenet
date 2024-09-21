// select element by ID
const cardWrapper = document.getElementById('Recommended')
// get data from db.json
fetch('http://localhost:3000/Recommended')
// convert data to json
.then(res => res.json())
// loop through data and fill cardWrapper elements
.then(data => {
    cardWrapper.innerHTML =  data.map(item =>{
        return  `
            <div class="card bg-base-200 shadow-xl ">
            <div>
            ${
            item.badge ?
                `<div class="badge badge-error absolute lg:text-base text-[10px]">${item.badge}</div>` : ''
            }
              <img
                class="w-full"
                src="${item.img}"/>
            </div>
            <div class="card-body">
              <div class="flex">
                <img class="w-[24px] h-[24px]" src=${item.logo}>
                <p class="lg:text-base text-[10px]">${item.title}</p>
              </div>
              <p class="lg:text-xl text-sm font-bold">${item.dis}</p>
              ${
              item.more ? 
                `<p class="text-orange-300 lg:text-base text-[10px]">${item.more}</p>` : ''
              }
              <p class="lg:text-xs text-[8px]  font-bold h-full flex items-start pt-3">${item.tag}</p>
              <p class="lg:text-base text-sm font-bold">From ${item.price}</p>
            </div>
          </div>
        `
    }).join('')
})




// select element by ID
const cardWrapper2 = document.getElementById('Featured')
// get data from db.json
fetch('http://localhost:3000/Featured')
// convert data to json
.then(res => res.json())
// loop through data and fill cardWrapper elements
.then(data => {
    cardWrapper2.innerHTML =  data.map(item =>{
        return  `
            <div class="card bg-base-200 shadow-xl ">
            <div>
            ${
            item.badge ?
                `<div class="badge badge-error absolute lg:text-base text-[10px]">${item.badge}</div>` : ''
            }
              <img
                class="w-full"
                src="${item.img}"/>
            </div>
            <div class="card-body">
              <div class="flex">
                <img class="w-[24px] h-[24px]" src=${item.logo}>
                <p class="lg:text-base text-[10px]">${item.title}</p>
              </div>
              <p class="lg:text-xl text-sm font-bold">${item.dis}</p>
              ${
              item.more ? 
                `<p class="text-orange-300 lg:text-base text-[10px]">${item.more}</p>` : ''
              }
              <p class="lg:text-xs text-[8px]  font-bold h-full flex items-start pt-3">${item.tag}</p>
              <p class="lg:text-base text-sm font-bold">From ${item.price}</p>
            </div>
          </div>
        `
    }).join('')
})




// select element by ID
const cardWrapper3 = document.getElementById('Trending-Now')
// get data from db.json
fetch('http://localhost:3000/Trending-Now')
// convert data to json
.then(res => res.json())
// loop through data and fill cardWrapper elements
.then(data => {
    cardWrapper3.innerHTML =  data.map(item =>{
        return  `
            <div class="card bg-base-200 shadow-xl ">
            <div>
            ${
            item.badge ?
                `<div class="badge badge-error absolute lg:text-base text-[10px]">${item.badge}</div>` : ''
            }
              <img
                class="w-full"
                src="${item.img}"/>
            </div>
            <div class="card-body">
              <div class="flex">
                <img class="w-[24px] h-[24px]" src=${item.logo}>
                <p class="lg:text-base text-[10px]">${item.title}</p>
              </div>
              <p class="lg:text-xl text-sm font-bold">${item.dis}</p>
              ${
              item.more ? 
                `<p class="text-orange-300 lg:text-base text-[10px]">${item.more}</p>` : ''
              }
              <p class="lg:text-xs text-[8px]  font-bold h-full flex items-start pt-3">${item.tag}</p>
              <p class="lg:text-base text-sm font-bold">From ${item.price}</p>
            </div>
          </div>
        `
    }).join('')
})