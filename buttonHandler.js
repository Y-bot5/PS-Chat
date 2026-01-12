document.addEventListener("DOMContentLoaded", () => {
    const newMemberBtn = document.getElementById("newMember");
      const members = document.getElementById("members");
        const memberNameInput = document.getElementById("memberName");

          // Load saved members from localStorage
            const savedMembers = JSON.parse(localStorage.getItem("membersList")) || [];
              savedMembers.forEach(name => {
                  const li = document.createElement("li");
                      li.textContent = name;
                          members.appendChild(li);
                            });

                              // Add new member
                                newMember.addEventListener("click", () => {
                                    const name = memberName.value.trim();
                                        if (!name) return; // ignore empty names

                                            // Add to list in DOM
                                                const li = document.createElement("li");
                                                    li.textContent = name;
                                                        members.appendChild(li);

                                                            // Save to localStorage
                                                                savedMembers.push(name);
                                                                    localStorage.setItem("membersList", JSON.stringify(savedMembers));

                                                                        // Clear input
                                                                            memberNameInput.value = "";
                                                                              });
                                                                              });
                                                                              
})