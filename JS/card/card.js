// select element by ID
const cardWrapper = document.getElementById('wrapper')

// get data from db.json
fetch('http://localhost:3000/card')
// convert data to json
.then(res => res.json())
// loop through data and fill cardWrapper elements
.then(data => {
    cardWrapper.innerHTML =  data.map(item =>{
        return  `
            <div class="card bg-base-200 shadow-xl flex-1 w-[24%] h-[480px]">
            <div>
            ${
            item.badge ?
                `<div class="badge badge-error absolute lg:text-base text-[10px]">${item.badge}</div>` : null
            }
              <img
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
                `<p class="text-orange-300 lg:text-base text-[10px]">${item.more}</p>` : null
              }
              <p class="lg:text-xs text-[8px]  font-bold h-full flex items-start pt-3">${item.tag}</p>
              <p class="lg:text-base text-sm font-bold">From ${item.price}</p>
            </div>
          </div>
        `
    }).join('')

})







