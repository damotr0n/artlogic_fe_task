
// --------------------------------------------------
// data fetching

const fetchQuestionData = () => {
    return $.ajax({
        url: "public/data.json", 
        success: (res) => res
    })
}

// --------------------------------------------------
// helpers

const onClick = (index) => {
    $("#" + index + ".question").toggleClass("open")
    $("#" + index + ".question .question-content").slideToggle(250);
}

const createQuestion = (title, content, index) => {
    let questionItem = $("<li id='" + index + "' class='question'>")

    let questionTitle = $("<div class='question-title'>")
    questionTitle.append("<p>" + index + ". " + title + "</p>")
    questionTitle.append("<div class='arrow-down' />")

    questionItem.append(questionTitle)
    questionItem.append("<p class='question-content'>" + content + "</p>")
    questionItem.click(() => {
        onClick(index);
    })
    return questionItem
}

const createQuestionList = (questionData) => {
    return questionData.map((q, index) => {
        return createQuestion(q.title, q.content, index + 1)
    })
}

// --------------------------------------------------
// main execution

$("#question-list").ready(async () => {
    const questionData = await fetchQuestionData()
    const questions = createQuestionList(questionData.rows)
    $("#question-list").append(questions)
    // avoids popping from the above append
    // would require a loading screen for any long API calls
    $("body").removeClass("hidden")
})

