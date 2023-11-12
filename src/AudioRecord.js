import React, { useState, useEffect } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

const AudioRecord = () => {
  const tf = require('@tensorflow/tfjs');
  const dataset = tf.data.csv('https://storage.googleapis.com/tfjs-datasets/imdb_reviews.csv');


  const [recording, setRecording] = useState(false);
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  
  const {listen, listening, stop} = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
  
  const startRecording = () => {
    setRecording(true);
    listen(); //녹음중
  };

  const stopRecording = async () => {
    setRecording(false);
    stop(); // 녹음종료
    analyzeEmotion();
  };

  const preprocessText = (text) => {
    // Replace this with your own text preprocessing logic
    // Tokenization, padding, etc.
    return [text.length]; // Placeholder, replace with actual preprocessed data
  };

  const analyzeEmotion = async () => {
    let score = 0.1;

    // Update the result state based on the predicted sentiment
    setResult(score > 0.5 ? '긍정' : '부정');
  };

  useEffect(() => {
    if (value !== '') {
      analyzeEmotion();
    }
  }, [value]);

  return (
    <div>
      <button onClick={startRecording} disabled={recording}>
        🛑시작
      </button>
      <button onClick={stopRecording} disabled={!recording}>
        ⏺️멈춤
      </button>
      {listening && <div>음성인식 활성화 중</div>}
      <div>
        <strong>텍스트:</strong> {value}
      </div>
      <div>
        <strong>결과:</strong> {result}
      </div>
    </div>
  );
};

export default AudioRecord;
