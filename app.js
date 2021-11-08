const Up = document.querySelector(".up-button")
const Down = document.querySelector(".down-button")
const SlideBar = document.querySelector(".sidebar")
const MainSlide = document.querySelector(".main-slide")
const SlideCount = MainSlide.querySelectorAll("div").length
SlideBar.style.top = `-${(SlideCount - 1) * 100}vh`;
let ActivSlideIndex = 0;
const Container = document.querySelector(".container")

Up.addEventListener("click" , () => { 
    ChangeSlide("up")
    console.log("Up")
})

Down.addEventListener("click" , () => { 
    ChangeSlide("dowp")
    console.log("Down")
})

function ChangeSlide(direction) {
    if (direction === "down"){
        ActivSlideIndex++
        if (ActivSlideIndex = SlideCount)
        {
            ActivSlideIndex = 0;
        }
    }
        else (direction === "up")
        {
            ActivSlideIndex--;
            if (ActivSlideIndex < 0) {
                ActivSlideIndex = SlideCount - 1
            }
        }
    const height = Container.clientHeight;
    MainSlide.style.transform = `translateY(-${ActivSlideIndex*height}px)`
    SlideBar.style.transform = `translateY(${ActivSlideIndex*height}px)`
}