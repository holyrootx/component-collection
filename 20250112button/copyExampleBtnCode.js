'use strict';

let exampleCopyBtn = document.querySelectorAll(".example-btn-copy");

exampleCopyBtn.forEach((copyBtn,index) => {
    copyBtn.addEventListener("click",(e)=>{
        const clickedClipboard = e.target.closest(".content-wrapper");
        
        
        let btnContainer = clickedClipboard.nextElementSibling;
        let copiedText = "";
        Array.from(btnContainer.children).forEach((btn,BtnIndex) => {
            // <,> => &lt;, &gt; 변경해주어야 textEditor에 적용이되어서 변경해준 Line입니다.
            copiedText += btn.outerHTML + "\n";
        });
        

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
});

