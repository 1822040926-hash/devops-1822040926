let count = 0;

document.getElementById("btn").addEventListener("click", function () {
  count++;
  document.getElementById("message").textContent =
    "Website được triển khai tự động bởi GitHub Actions! (Bạn đã bấm " + count + " lần)";
});
