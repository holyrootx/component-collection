'use strict';

// **
// * 이하 line끝단에 [0]이 붙은 이유: 
// * 디자인 재활용을 위해 클래스 이름이 겹쳐서 첫번째로 오는 copy-btn을 return 받아서 사용한다는 의미입니다
let cssCopyBtn = document.querySelectorAll(".copy-btn")[0];

cssCopyBtn.addEventListener("click",(e)=>{
    const clickedClipboard = e.target.closest(".content-wrapper");
    
    // 카피 메세지 동일할걸로 예상되어 일단 고정적인 텍스트를 담았습니다.
    let copiedText = `<link href="./elemDesign.css" rel="stylesheet" />`;
    
    // 복사 기능
    navigator.clipboard.writeText(copiedText);
    
    // ** 
    // * 👀👀👀 UI 요소s select 및 style 변경
    // * 👀👀👀 copy 메세지 및 check표시된 클립보드 display: none => 보이게 하기
    // * 👀👀👀 2초 뒤 기존 상태 복구 이하 setTimeout 메서드 부분 참고
    let clipboard = clickedClipboard.querySelector(".clipboard");
    let clipboardCheck = clickedClipboard.querySelector(".clipboard-check");
    let copied = clickedClipboard.querySelector(".copied");

    clipboard.style.display = "none";
    clipboardCheck.style.display = "inline-block";
    copied.style.display = "inline";

    setTimeout(() => {
        // 2초 후 기존 상태 복구
        clipboard.style.display = "inline-block";
        clipboardCheck.style.display = "none";
        copied.style.display = "none";
    }, 2000);
    
});

