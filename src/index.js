const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((json) => displyLesson(json.data))
};

const displyLesson = (lessons) => {
    // console.log(lessions)
    const lessonBtn = document.getElementById('lesson-btn')

    for (lesson of lessons) {
        // console.log(lessons)
        const div = document.createElement('div');
        div.innerHTML = "";
        div.innerHTML = `
        <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson -${lesson.level_no}</button>
        `

        lessonBtn.append(div);
    }
}
loadLesson()