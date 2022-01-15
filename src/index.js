import "./styles.css";

const addIncomplete = (todo) => {
  // liタグ生成
  const li = document.createElement("li");
  li.className = "incomplete-item";

  // spanタグ生成
  const span = document.createElement("span");
  span.className = "todo";
  span.innerText = todo;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    addComplete(todo);

    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(span);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

const addComplete = (todo) => {
  // liタグ生成
  const li = document.createElement("li");
  li.className = "complete-item";

  // spanタグ生成
  const span = document.createElement("span");
  span.className = "todo";
  span.innerText = todo;

  // button(戻す)タグ生成
  const returnButton = document.createElement("button");
  returnButton.innerText = "戻す";
  returnButton.addEventListener("click", () => {
    addIncomplete(todo);
    const deleteTarget = returnButton.parentNode;
    document.getElementById("complete-list").removeChild(deleteTarget);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(span);
  li.appendChild(returnButton);

  // 完了リストに追加
  document.getElementById("complete-list").appendChild(li);
};

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;

  if ("" === inputText) {
    return;
  }

  document.getElementById("add-text").value = "";
  addIncomplete(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
