document.addEventListener("DOMContentLoaded", function () {
  async function API() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    displayData(data);
  }
  API();

  function displayData(data) {
    let tableData = document.getElementById("tableData");

    data.map((item) => {
      tableData.innerHTML += `
        <td scope="row">${item.id}</td>
       <td>
         <img
           src="https://t3.ftcdn.net/jpg/10/74/74/92/360_F_1074749243_0rJlr3XWX8uuWH0QMphv7G3vtBILRQWJ.jpg"
           alt=""
           width="270px"
         />
       </td>
       <td>
       ${item.title}
       </td>
       <td>
       ${item.body}
       </td>
       <td>
         <button type="button" class="btn btn-warning">Click Here</button>
       </td>

`;
    });
  }
});
