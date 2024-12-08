var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
function populateCheckboxes(target) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("populate start");
        yield features.map((f) => __awaiter(this, void 0, void 0, function* () {
            console.log(`feature ${f}`);
            const label = document.createElement("label");
            label.htmlFor = f.name;
            const input = document.createElement("input");
            input.type = "checkbox";
            input.id = f.name;
            input.checked = (yield isHidden(f.name)) !== true;
            label.appendChild(input);
            //console.log("is checked", !isHidden(f.name));
            const span = document.createElement("span");
            span.className = "featureName";
            span.textContent = f.label;
            label.appendChild(span);
            target.appendChild(label);
        }));
        console.log("populate end");
    });
}
document.addEventListener("DOMContentLoaded", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const container = document.querySelector("#checkboxes");
        if (!container) {
            console.error("no target element found");
            return;
        }
        yield populateCheckboxes(container);
        document
            .querySelectorAll("input[type='checkbox']")
            .forEach((el) => {
            console.log("found checkbox");
            el.addEventListener("change", (ev) => {
                console.log(`toggled checkbox ${el.id} to ${ev.target.checked}`);
                setIsHidden(el.id, ev.target.checked !== true);
            });
        });
    });
});
function setIsHidden(feature, value) {
    return __awaiter(this, void 0, void 0, function* () {
        yield browser.storage.sync.set({ [feature]: value });
        //console.log(`put ${feature}: ${value}`);
    });
}
function isHidden(feature) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield browser.storage.sync.get([feature]);
        //console.log(`get ${feature}: ${res[feature]}`);
        return res[feature];
    });
}
