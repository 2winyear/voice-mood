import { CardContainer } from "./CommonStyles";


const DiaryInputVoice = () => {

    const startRecording = () => {
        // setRecording(true);
        // listen(); //녹음중
    };
    
    const stopRecording = async () => {
        // setRecording(false);
        // stop(); // 녹음종료
    };
    
    const analyzeEmotion = async () => {
        // if(!voiceUserInput) {
        //     messageApi.open({
        //     type: "error",
        //     content: "일과를 적어주세요.",
        // });
        // return;
    }

    return (
    <div>
        <CardContainer>
        스마트폰의 녹음 버튼을 클릭하고 오늘 하고 싶은 이야기를 30초 내외로 녹음해주세요<br></br>
        (단, 하고싶은 이야기가 없으면 샘플예시를 클릭하세요)
        </CardContainer>
        <button onClick={startRecording}>
            🛑시작
        </button>
        <button onClick={stopRecording}>
            ⏺️멈춤
        </button>
        <button onClick={analyzeEmotion}>
            ⏏️분석
        </button>
    </div>
    )
}

export default DiaryInputVoice;