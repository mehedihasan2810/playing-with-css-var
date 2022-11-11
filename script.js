const container = document.querySelectorAll(".container input");
function changingValue() {
    let suffix = this.dataset.sizing || "";
    console.log(suffix)
    document.documentElement.style.setProperty(
      `--${this.name}`,
      this.value + suffix
    );
}
container.forEach((item) => item.addEventListener("change", changingValue));
container.forEach((item) => item.addEventListener("mousemove", changingValue));
