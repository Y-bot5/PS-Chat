document.addEventListener("DOMContentLoaded", () => {
      const addBtn = document.getElementById("newMember");
        const list = document.getElementById("members");

          addBtn.addEventListener("click", () => {
              const li = document.createElement("li");
                  li.textContent = "New item";
                      list.appendChild(li);
                        });
                        });