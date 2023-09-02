let loadData = async () =>{
    
    let res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    let datas =  await  res.json();

    console.log(datas.data);
    let tabContainer = document.getElementById('tab-container');

    datas.data.slice(0, 4).forEach((all) =>{
        let creatDiv = document.createElement('div');
        creatDiv.innerHTML =`
            <a onclick="allItems('${all.category_id}')" class="tab bg-red-500 m-7 w-[100px] h-[50px] text-white font-bold">${all.category}</a> 
        `;
        tabContainer.appendChild(creatDiv);
    });
    // tabContainer.innerHTML = '';
};

let allItems = async (categoryID) =>{
    let res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryID}`);
    let data = await res.json();

    let cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ""
    data.data.forEach((categoryItemss) =>{
        let creatDivs = document.createElement('div');
        creatDivs.innerHTML =`

            <div class="card bg-base-100 shadow-xl">
                <figure><img class="h-[200px]" src="${categoryItemss?.thumbnail}" /></figure>
                <div class="card-body">
                    <div class="flex items-center">
                        <img class="mr-5 w-8 h-8 rounded-full" src="${categoryItemss?.authors[0].profile_picture}" />
                        <h2 class="card-title"> ${categoryItemss?.title} </h2>
                    </div>
                    
                    <div class="flex w-[12rem]">
                        <p>${categoryItemss?.authors[0].profile_name}</p>
                        <div class="flex">
                            ${categoryItemss?.authors[0].verified} 
                            <img src="imae/badge.png" alt="" srcset="">
                        </div>

                    </div>  
                    <p> ${categoryItemss?.others.views} views</p>
                </div>
            </div>
        `,
        cardContainer.appendChild(creatDivs);
    })
    console.log(data.data);
    console.log(categoryID);
}
loadData()
allItems("1000")