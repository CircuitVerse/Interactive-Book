$(function() {
    var quizSettings = $('.quiz');

    if (quizSettings != null) {
        var quiz = $('<div class="pop-quiz">' +
        '<h2>Pop Quiz</h2>' +
        '</div>');

        // Create questions
        var questionNo = 0;
        quizSettings.children('li').each(function() {
            questionNo++;
            var question = $('<div class="quiz-question"></div>');
            var questionText = FilterHtml($(this).contents());
            question.append('<em>Question ' + questionNo + '</em>');
            question.append('<p>' + questionText + '</p>');

            // Get answers
            var answers = [];
            $(this).find('ul').each(function() {
                $(this).children('li').each(function() {
                    answers.push([false, $(this).contents().get(0).nodeValue.trim()]);
                });
            });
            $(this).find('ol').each(function() {
                $(this).children('li').each(function() {
                    answers.push([true, $(this).contents().get(0).nodeValue.trim()]);
                });
            });

            // Shuffle answers
            answers.sort(function() { return 0.5 - Math.random(); });

            // Show answers
            var questionAnswers = $('<div class="quiz-answers"></div>');
            answers.forEach(function(answer) {
                var classes = 'quiz-answer ';
                if (answer[0] == true) {
                    classes += 'quiz-true';
                }
                else {
                    classes += 'quiz-false';
                }

                questionAnswers.append('<div class="' + classes + '" onclick="ShowQuizAnswer(this)">' +
                answer[1] +
                '</div>');
            });
            question.append(questionAnswers);

            quiz.append(question);
        });

        quizSettings.after('<br>');
        quizSettings.after(quiz);
        quizSettings.remove();
    }
});

function ShowQuizAnswer(element) {
    if (!$(element).hasClass('quiz-show-answer')) {
        $(element).addClass('quiz-show-answer');
    }
}

function FilterHtml(contents) {
    contents = contents.filter(function(index, content) {
        // Remove lists
        var tagName = $(content).prop('tagName');
        if (tagName == 'OL') {
            return false;
        }
        else if (tagName == 'UL') {
            return false;
        }
        return true;
    });
    
    var html = "";
    contents.each(function() {
        if (this.nodeType == 3) {
            // Text object
            html += this.nodeValue.trim();
        }
        else if (this.nodeType == 1) {
            // HTML element
            html += this.outerHTML;
        }
        html += ' ';
    });
   
    return html;
}
