var reviewThumbsUp = document.getElementById("review-thumbs-up");
var reviewThumbsDown = document.getElementById("review-thumbs-down");
var reviewTextInput = document.getElementById("review-text-input");
var reviewText = document.getElementById("review-text");
var reviewTextTwo = document.getElementById("review-text-two");
var reviewButton = document.getElementById("review-button");
var urlCode = "D56ddUZRQtLMWKmQW_PR5YHfB_UaAadR4e8fSzDu_vyMAzFucalfPw==";

var reviewId;

if(reviewThumbsUp != null) {
    reviewThumbsUp.addEventListener("click", function() {
        // send API call
        call('https://peakboardglobalfunctions.azurewebsites.net/api/SubmitUserFeedback?code=' + urlCode + '&Article=' + window.location.href + '&Thumbs=Up',
            function() {
                reviewThumbsUp.classList.toggle("hidden");
                reviewThumbsDown.classList.toggle("hidden");
                reviewText.classList.toggle("hidden");
                reviewTextTwo.classList.toggle("hidden");
            });
    });
}

if(reviewThumbsDown != null) {
    reviewThumbsDown.addEventListener("click", function() {
        // send API call

        call('https://peakboardglobalfunctions.azurewebsites.net/api/SubmitUserFeedback?code=' + urlCode + '&Article=' + window.location.href + '&Thumbs=Down');

        // change to input box for more information
        reviewText.classList.toggle("hidden");
        reviewTextInput.classList.toggle("hidden");
        reviewButton.classList.toggle("hidden");
        reviewThumbsUp.classList.toggle("hidden");
        reviewThumbsDown.classList.toggle("hidden");

        document.getElementById("review-button").addEventListener("click", function() {
            call('https://peakboardglobalfunctions.azurewebsites.net/api/SubmitUserFeedback?code=' + urlCode + '&ID=' + reviewId + '&Feedback=' + reviewTextInput.value,
                function() {
                    reviewTextTwo.classList.toggle("hidden");
                    reviewTextInput.classList.toggle("hidden");
                    reviewButton.classList.toggle("hidden");
                });
        });
    });
}

function call(url, callback) {
    fetch(url).then((response) => {
        return response.text();
    }).then((text) => {
        reviewId = JSON.parse(text.replace(/(\s*?{\s*?|\s*?,\s*?)(['"])?([a-zA-Z0-9]+)(['"])?:/g, '$1"$3":')).ID;

        if(callback) {
            callback();
        }
    });
}