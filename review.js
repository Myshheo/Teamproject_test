//변수들의 선언
const reviewWrap = document.getElementById('review-wrap');
const username = document.getElementById('username');
const password = document.getElementById('password');
const postContent = document.getElementById('postContent');
const submit = document.getElementById('submit');

// 입력 받은 값을 배열로 변환
const reviews = [];

//html 상 표기 해줄 함수 선언
const write = (Obj)=>{
    return `
    <div id="review-wrap">
        <div>
            <p id='id'>ID : ${Obj.ID}</p>
            <p id="password">PW : ${Obj.Password}</p>
        </div>
        <div>
            <p id="review">reviews : ${Obj.Review}</p>
        </div>
    </div>`
};

//submit btn 이벤트 발생.
submit.addEventListener("click",function() {
    const review = {
        ID: username.value,
        Password: password.value,
        Review: postContent.value
    };

    // 리뷰를 배열에 추가
    reviews.push(review); 

    // 리뷰들을 HTML로 변환
    const reviewHTML = reviews.map(write).join('');
    reviewWrap.innerHTML = reviewHTML;
    
    // 리뷰 입력 필드 초기화
    username.value = '';
    password.value = '';
    postContent.value = '';
});