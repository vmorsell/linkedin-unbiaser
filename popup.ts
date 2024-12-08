type Feature = {
  label: string;
  attr: string;
};

const features = [
  { label: "Name", name: "name" },
  { label: "Profile Picture", name: "picture" },
  { label: "Pronouns", name: "pronouns" },
  { label: "Distance (1st, 2nd etc)", name: "distance" },
  { label: "Highlighted school", name: "school" },
  { label: "Mutual connections", name: "mutualConnections" },
  { label: "Education", name: "education" },
];

async function populateCheckboxes(target: HTMLElement): Promise<void> {
  console.log("populate start");
  await features.map(async (f) => {
    console.log(`feature ${f}`);
    const label = document.createElement("label");
    label.htmlFor = f.name;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = f.name;
    input.checked = (await isHidden(f.name)) !== true;
    label.appendChild(input);
    //console.log("is checked", !isHidden(f.name));

    const span = document.createElement("span");
    span.className = "featureName";
    span.textContent = f.label;
    label.appendChild(span);

    target.appendChild(label);
  });
  console.log("populate end");
}

document.addEventListener("DOMContentLoaded", async function () {
  const container = document.querySelector("#checkboxes") as HTMLElement;

  if (!container) {
    console.error("no target element found");
    return;
  }

  await populateCheckboxes(container);

  document
    .querySelectorAll("input[type='checkbox']")
    .forEach((el: HTMLInputElement) => {
      console.log("found checkbox");
      el.addEventListener("change", (ev) => {
        console.log(
          `toggled checkbox ${el.id} to ${
            (ev.target as HTMLInputElement).checked
          }`
        );
        setIsHidden(el.id, (ev.target as HTMLInputElement).checked !== true);
      });
    });
});

async function setIsHidden(feature: string, value: boolean): Promise<void> {
  await browser.storage.sync.set({ [feature]: value });
  //console.log(`put ${feature}: ${value}`);
}

async function isHidden(feature: string): Promise<boolean> {
  const res = await browser.storage.sync.get([feature]);
  //console.log(`get ${feature}: ${res[feature]}`);
  return res[feature];
}
