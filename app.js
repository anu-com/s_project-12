var  arr = [
    { name: "anurag kumar", img: "https://images.unsplash.com/photo-1652018145149-b61a9566b245?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status: "strangers" },
    { name: "manish kumar", img: "https://images.unsplash.com/photo-1605822422016-8e94fef1155e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status: "strangers" },
    { name: "gulshan kumar", img: "https://images.unsplash.com/photo-1638437631087-fadcebc6aa01?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status: "strangers" },
]


function print() {
    var clutter = "";

arr.forEach(function(val, index) {
    clutter += `<div id="card">
    <div id="img">
        <img src= ${val.img}">
    </div>
    <h3>${val.name}</h3>
    <h5 id = "${val.status}">${val.status}</h5>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque repellat quaerat repellendus laborum.</p>
    <button class="${val.status === "strangers" ?"blue" : "red"}" id= "${index}">${val.status === "strangers" ? "Add Friend" : "Remove Friend"}</button>
</div>`;
})

document.querySelector("#main").innerHTML = clutter;
}

print();



document.querySelector("#main")
.addEventListener("click", function (details) {
    arr[details.target.id].status = "Friends";
    print();
}); 