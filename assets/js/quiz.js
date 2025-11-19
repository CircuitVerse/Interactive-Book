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

            // Get answers with explanations/hints
            var answers = [];
            
            // Correct answers from <ol> with explanations
            $(this).find('ol').each(function() {
                $(this).children('li').each(function() {
                    var text = $(this).contents().get(0).nodeValue.trim();
                    // Check for explanation in <em> tag, otherwise use default
                    var explanation = $(this).find('em').text() || 
                        "Correct! Well done.";
                    answers.push([true, text, explanation]);
                });
            });
            
            // Incorrect answers from <ul> with hints
            $(this).find('ul').each(function() {
                $(this).children('li').each(function() {
                    var text = $(this).contents().get(0).nodeValue.trim();
                    // Check for hint in <em> tag, otherwise use default
                    var hint = $(this).find('em').text() || 
                        "That's not correct. Try again!";
                    answers.push([false, text, hint]);
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

                var answerDiv = $('<div class="' + classes + '" data-feedback="' + 
                    escapeHtml(answer[2]) + '">' +
                    answer[1] +
                    '</div>');
                
                questionAnswers.append(answerDiv);
            });
            
            // Add feedback container
            var feedbackContainer = $('<div class="quiz-feedback-container"></div>');
            
            question.append(questionAnswers);
            question.append(feedbackContainer);

            quiz.append(question);
        });

        quizSettings.after('<br>');
        quizSettings.after(quiz);
        quizSettings.remove();
        
        // Attach click handlers after DOM insertion
        $('.quiz-answer').on('click', ShowQuizAnswer);
    }
});

function ShowQuizAnswer(event) {
    var element = $(event.currentTarget);
    var questionContainer = element.closest('.quiz-question');
    var allAnswers = questionContainer.find('.quiz-answer');
    var feedbackContainer = questionContainer.find('.quiz-feedback-container');
    
    // Prevent re-selection
    if (questionContainer.hasClass('answered')) {
        return;
    }
    
    // Mark question as answered
    questionContainer.addClass('answered');
    
    // Show the selected answer
    if (!element.hasClass('quiz-show-answer')) {
        element.addClass('quiz-show-answer');
    }
    
    // Disable all other answers
    allAnswers.not(element).addClass('quiz-disabled');
    
    // Determine if correct or incorrect
    var isCorrect = element.hasClass('quiz-true');
    var feedbackText = element.data('feedback');
    
    // Create and show feedback
    var feedbackDiv = $('<div class="quiz-feedback"></div>');
    
    if (isCorrect) {
        feedbackDiv.addClass('feedback-correct');
        feedbackDiv.html(
            '<div class="feedback-header">' +
                '<span class="feedback-icon">✓</span>' +
                '<span class="feedback-title">Correct!</span>' +
            '</div>' +
            '<div class="feedback-message">' + feedbackText + '</div>'
        );
    } else {
        feedbackDiv.addClass('feedback-incorrect');
        feedbackDiv.html(
            '<div class="feedback-header">' +
                '<span class="feedback-icon">✗</span>' +
                '<span class="feedback-title">Not quite right</span>' +
            '</div>' +
            '<div class="feedback-message">' + feedbackText + '</div>'
        );
    }
    
    // Add reset button
    var resetBtn = $('<button class="quiz-reset-btn">Try Again</button>');
    resetBtn.on('click', function() {
        ResetQuiz(questionContainer);
    });
    feedbackDiv.append(resetBtn);
    
    // Show feedback with animation
    feedbackContainer.html(feedbackDiv);
    
    // Smooth scroll to feedback
    setTimeout(function() {
        feedbackDiv[0].scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
        });
    }, 100);
}

function ResetQuiz(questionContainer) {
    // Remove answered state
    questionContainer.removeClass('answered');
    
    // Reset all answers
    var allAnswers = questionContainer.find('.quiz-answer');
    allAnswers.removeClass('quiz-show-answer quiz-disabled');
    
    // Clear feedback
    questionContainer.find('.quiz-feedback-container').empty();
}

function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
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