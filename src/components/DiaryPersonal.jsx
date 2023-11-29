import { Button, Form, Input, Radio, Select } from "antd";
import { CardContainer } from "./CommonStyles";
import "./style.css"
import { styled } from "styled-components";

const DiaryPersonal = () => {
    

    return (
    <div>
        <div className="start">
        30초 만에 간단 심리 검사 시작하기 ⩔
        </div>
        
        <div className="form">
        <Form>
            <Form.Item label="성별" className="sex" >
                <Radio.Group>
                    <Radio className="M" value="male"> 남 </Radio>
                    <Radio className="F" value="female"> 여 </Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="연령대">
            <Select>
                <Select.Option value="10">10대</Select.Option>
                <Select.Option value="20">20대</Select.Option>
                <Select.Option value="30">30대</Select.Option>
                <Select.Option value="40">40대</Select.Option>
                <Select.Option value="50">50대</Select.Option>
                <Select.Option value="50">60대</Select.Option>
                <Select.Option value="50">70대</Select.Option>
            </Select>
            </Form.Item>
            <Form.Item label="닉네임">
            <Input />
            </Form.Item>
        </Form>
        </div>
        <div className="warning">
        * 너의 목소리가 들려는 개인정보를 받지 않습니다.<br></br>
        성별과 연령대별만 입력 받습니다.
        </div>
    </div>
    )
}

export default DiaryPersonal;
