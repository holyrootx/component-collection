// 버튼이 담겨져있는 모든 컨테이너를 배열로 반환 받습니다.
let btnContainers = document.querySelectorAll(".button-container");

btnContainers.forEach((btnContainer,index)=>{
    
    // **
    // * closest() 함수의 반대 개념은 가장 가까운 하위 자식 요소를 찾는 것입니다.
    // * 이에 해당하는 함수는 DOM 트리를 아래로 탐색하는 것이며, 
    // * 일반적으로는 querySelector() 함수를 사용합니다.   
    // * 배열이 여러개 더생길 것을 대비하여 forEach로 작성하였습니다. 

    // Editor에 쓰여질 Code
    let writingText = "";

    // 가장 가까운 상위 조상 요소 찾아서 반환
    let contentContainer = btnContainer.closest(".content-container"); 

    Array.from(btnContainer.children).forEach((btn,BtnIndex) => {
        // <,> => &lt;, &gt; 변경해주어야 textEditor에 적용이되어서 변경해준 Line입니다.
        writingText += btn.outerHTML.replaceAll("<","&lt;").replaceAll(">","&gt;") + "\n";
    });

    // TextEditor : Editor 요소를 찾아서 반환 받습니다.
    let textEditor = contentContainer.querySelector(".editor");
    textEditor.innerHTML = writingText;

})