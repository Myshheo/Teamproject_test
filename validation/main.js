const usernameInput = document.getElementById('username');
const submitButton = document.getElementById('submit');
const errorMessage = document.getElementById('error-message');

submitButton.addEventListener('click', function() {
    // 입력 필드에서 사용자명 가져오기
    const username = usernameInput.value;
    
    // 유효성 검사 수행
    if (validateUsername(username)) {
        // 유효한 경우
        errorMessage.textContent = ''; // 오류 메시지 초기화
        // 여기에 제출 로직 추가
    } else {
        // 유효하지 않은 경우
        errorMessage.textContent = '사용자명은 3글자 이상이어야 합니다.';
    }
});

function validateUsername(username) {
    // 간단한 예: 사용자명은 3글자 이상이어야 함
    return username.length >= 10;
}

console.log(validateUsername('question'));
