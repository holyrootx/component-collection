'use strict';

// select()
let copyBtns = document.querySelectorAll(".copy-btn");

copyBtns.forEach((copyBtn,index) => {
    copyBtn.addEventListener("click",(e)=>{
        const clickedContent = e.target.closest(".content-container");
        let copiedCode = clickedContent.querySelector("code");

        const trans = (text) =>{
            // text.replace("&lt", "W3Schools");
            // console.log(text.replaceAll("&lt;", "<").replaceAll("&gt;",">"))
            return text.replaceAll("&lt;", "<").replaceAll("&gt;",">");
            
        }
        navigator.clipboard.writeText(trans(copiedCode.innerHTML));
        
        // 3. insertBefore()로 버튼 위에 메시지 삽입
    
        let clipboard = clickedContent.querySelector(".clipboard");
        let clipboardCheck = clickedContent.querySelector(".clipboard-check");
        let copied = clickedContent.querySelector(".copied");

        console.log(clipboard);
        console.log(clipboardCheck);
        clipboard.style.display = "none";
        clipboardCheck.style.display = "inline-block";
        copied.style.display = "inline";


        setTimeout(() => {
            // message.remove(); // 메시지 삭제

            clipboard.style.display = "inline-block";
            clipboardCheck.style.display = "none";
            copied.style.display = "none";
        }, 2000);
        
        


        // console.log(copyBtn);
        

        // copiedCode.select(); // 텍스트 선택
        // console.log(copiedCode);
        // navigator.clipboard.writeText(copiedCode.innerHTML);


        

    });
});

