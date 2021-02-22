import React from "react";
function TreeConstructor(strArr) {
  let arr = strArr.map((e) => {
    return e.replace(/\(|\)/g, "").replace(/\s/g, "").split(",");
  });
  let tree = { root: null };
  let errorFound;
  for (let i = 0; i < arr.length; i++) {
    let nodeValue = tree[arr[i][1]];
    let childValue = arr[i][0];
    let parentValue = arr[i][1];
    if (!nodeValue) {
      tree[parentValue] = [];
    }

    if (nodeValue && nodeValue[0] == childValue) {
      console.log("found duplicate");
      errorFound = true;
      break;
    }
    /*
    if (
      nodeValue &&
      nodeValue[0] &&
      Object.values(nodeValue)[0] < tree[arr[i]]
    ) {
      console.log(nodeValue[0] + " " + childValue);

      // check if new child is another less than value
      if (childValue < nodeValue[0]) {
        console.log("found duplicate less than child");
        errorFound = true;
        break;
      }
    }
 */
    /*    if (
      nodeValue &&
      nodeValue[0] &&
      nodeValue[0] > Object.keys(tree)[0] &&
      childValue > Object.keys(tree)[0]
    ) {
      console.log("found two larger than root");
    }
 */
    tree[parentValue].push(Number(childValue));

    if (nodeValue && nodeValue.length > 2) {
      console.log("broken");
      errorFound = true;
      break;
    }
    // if the parent

    if (!tree.root) {
      tree.root = Number(arr[i][1]);
      console.log("root = " + tree.root);
    }
  }
  console.log(Object.keys(tree));

  console.log(tree);

  return tree;
}

// keep this function call here

//TreeConstructor(["(1,2)", "(2,4)", "(7,2)"]);
TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]);
//TreeConstructor(["(1, 2)", "(3,2)", "(2, 12)", "(5,2)"]); // false
//TreeConstructor(["(2,5)", "(2,6)"]); // false
//TreeConstructor(["(10,20)"]);
//TreeConstructor(["(2,3)", "(1,2)", "(4,9)", "(9,3)", "(12,9)", "(6,4)"]);
//TreeConstructor(["(2,3)", "(1,2)", "(4,9)", "(9,3)", "(12,9)", "(6,4)", "(1,9)"]); // false
//TreeConstructor(["(1,2)", "(2,4)", "(7,4)"]);
//TreeConstructor(["(5,6)", "(6,3)", "(2,3)", "(12,5)"]);
//TreeConstructor(["(10,20)", "(20,50)"]);

const Test = () => {
  return <div>Test</div>;
};

export default Test;
