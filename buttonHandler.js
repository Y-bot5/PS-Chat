      const newMemberBtn = document.getElementById("newMember"); // button
        const members = document.getElementById("members");       // ul
          const memberNameInput = document.getElementById("memberName"); // input

            // Load saved members from localStorage
              const savedMembers = JSON.parse(localStorage.getItem("membersList")) || [];
                savedMembers.forEach(name => {
                    const li = document.createElement("li");
                        li.textContent = name;
                            members.appendChild(li);
                              });

                                // Add new member on button click
                                  newMemberBtn.addEventListener("click", () => {
                                      const name = memberNameInput.value.trim();
                                          if (!name) return; // ignore empty names

                                              // Add to DOM
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
                                                                                document.addEventListener("DOMContentLoaded", () => {
                                                                                  const newMemberBtn = document.getElementById("newMember"); // button
                                                                                    const members = document.getElementById("members");       // ul
                                                                                      const memberNameInput = document.getElementById("memberName"); // input

                                                                                        // Load saved members from localStorage
                                                                                          const savedMembers = JSON.parse(localStorage.getItem("membersList")) || [];
                                                                                            savedMembers.forEach(name => {
                                                                                                const li = document.createElement("li");
                                                                                                    li.textContent = name;
                                                                                                        members.appendChild(li);
                                                                                                          });

                                                                                                            // Add new member on button click
                                                                                                              newMemberBtn.addEventListener("click", () => {
                                                                                                                  const name = memberNameInput.value.trim();
                                                                                                                      if (!name) return; // ignore empty names

                                                                                                                          // Add to DOM
                                                                                                                              const li = document.createElement("li");
                                                                                                                                  li.textContent = name;
                                                                                                                                      members.appendChild(li);

                                                                                                                                          // Save to localStorage
                                                                                                                                              savedMembers.push(name);
                                                                                                                                                  localStorage.setItem("membersList", JSON.stringify(savedMembers));

                                                                                                                                                      // Clear input
                                                                                                                                                          memberNameInput.value = "";
                                                                                                                                                            });